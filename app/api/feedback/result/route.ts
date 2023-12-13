import ScoreEmail from "./result-email-template";
import { render } from "@react-email/render";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        console.log("ENTERED SEND EMAIL: ", body);
        const {
            score,
            challenge,
            code,
            dateTime,
            email,
        }: {
            score: string;
            challenge: string;
            code: string;
            dateTime: string;
            email: string;
        } = body;
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            },
        });
        const emailHtml = render(
            ScoreEmail({ score, challenge, code, dateTime })
        );
        const options = {
            from: `"Tailspin Team" <tailspin.official@gmail.com>"`,
            to: email,
            subject: `The results are in!`,
            html: emailHtml,
        };
        transporter.sendMail(options);
        return NextResponse.json({ message: "Success" }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
}
