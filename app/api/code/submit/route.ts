import { NextResponse } from "next/server";
import { xata } from "@/lib/xata_client";
import { validateHTML } from "./submit-helpers";

export async function GET() {
    const record = await xata.db.Site.filter({
        field_name: "Landingpage_submit_count",
    }).getFirst();
    const fieldVal = record?.field_value;
    const id = record?.id;

    return NextResponse.json(
        { message: "Success", fieldVal, id },
        { status: 200 }
    );
}

/*
This is the entry point after code gets submitted. At the moment, this endpoint and its children endpoints are not protected. In the future, these routes need to be protected from DOS or spam attacks. 

This endpoint creates a record of the submission. Every minute, a cron job kicks off and processes a single submission at a time. 
*/

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const {
            challenge,
            code,
            dateTime,
            email,
        }: {
            challenge: string;
            code: string;
            dateTime: string;
            email: string;
        } = body;
        const cleanedCode = validateHTML(code);
        if (cleanedCode.length === 0) {
            return NextResponse.json(
                {
                    message:
                        "We've detected some disallowed code. Only HTML with Tailwind and no JS allowed!",
                },
                { status: 400 }
            );
        }

        //Update the last submission time for this email. For rate limiting purposes.
        const record = await xata.db.EmailSubmitRateLimiting.filter({
            email: email,
        }).getFirst();
        if (record) {
            if (record.lastSubmission && process.env.IS_PRODUCTION === "true") {
                //Time between submissions has to be at least 1 minute
                const lastSubmission = new Date(record.lastSubmission);
                const currentTime = new Date();
                if (
                    currentTime.getTime() - lastSubmission.getTime() <
                    60 * 1000 * 1
                ) {
                    return NextResponse.json(
                        { message: "Time between submissions too small!" },
                        { status: 400 }
                    );
                } else {
                    await xata.db.EmailSubmitRateLimiting.update(record.id, {
                        lastSubmission: new Date().toISOString(),
                    });
                }
            }
        } else {
            await xata.db.EmailSubmitRateLimiting.create({
                email: email,
                lastSubmission: new Date().toISOString(),
            });
        }

        await xata.db.SubmissionsMVP.create({
            email: email,
            code: cleanedCode,
            challengeName: challenge,
            dateTime: dateTime,
        });

        return NextResponse.json({ message: "Created" }, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: "Error occurred" },
            { status: 500 }
        );
    }
}
