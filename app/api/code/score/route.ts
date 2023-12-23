import LandingPageChallengeCode from "@/components/landing/test-challenges/challenge-code";
import { xata } from "@/lib/xata_client";
import { NextResponse } from "next/server";
import OpenAI from "openai";
import sendScoreResultEmail from "./submitEmailHandler";

const promptHeader =
    "Compare code B against code A. Using as few tokens as possible, output a percentage of similaritiy in semantics and intent.";

const openai = new OpenAI();

async function openAiCall(prompt: string) {
    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: "user", content: prompt }],
        model: "gpt-3.5-turbo",
    });
    return chatCompletion.choices[0]?.message?.content;
}

function extractPercentageScore(inputString: string): number {
    const regex = /(\d{1,3})%/;
    const match = inputString.match(regex);

    if (match && match[1]) {
        const percentage = parseInt(match[1]);
        if (percentage >= 0 && percentage <= 100) {
            return percentage;
        }
    }

    return 0;
}

function deleteSubmissionFromDB(id: string) {
    return xata.db.SubmissionsMVP.delete(id);
}

export async function POST() {
    const record = await xata.db.SubmissionsMVP.getFirst();
    if (record) {
        if (
            !record.challengeName ||
            !record.code ||
            !record.dateTime ||
            !record.email
        ) {
            deleteSubmissionFromDB(record.id);
            return NextResponse.json(
                { message: "Record is incomplete and has been deleted." },
                { status: 400 }
            );
        }
        const challenge = record.challengeName;
        const code = record.code;
        const dateTime = record.dateTime;
        const email = record.email;
        const recommendedSolution = LandingPageChallengeCode(challenge);
        let score = "0";
        if (!recommendedSolution) {
            return NextResponse.json(
                { message: `The challenge ${challenge} wasn't recognized.` },
                { status: 400 }
            );
        }
        if (process.env.IS_PRODUCTION === "true") {
            const prompt =
                promptHeader +
                "\nCode A:\n" +
                recommendedSolution +
                "\nCode B:\n" +
                code;
            const result = await openAiCall(prompt);
            console.log(`
            ===Debugging OpenAI===

            - Prompt generated:
                ${prompt}

            - Result:
                ${result}
        `);
            if (!result) {
                return NextResponse.json(
                    {
                        message: `Result was null. Needs to be retried.`,
                    },
                    { status: 500 }
                );
            }
            const rawPercentageScore = extractPercentageScore(result);
            console.log(`
            - Percentage score extracted
                ${rawPercentageScore}
        `);
            score = String(rawPercentageScore);
        } else {
            score = "58";
        }
        await sendScoreResultEmail(score, challenge, code, dateTime, email);
        await deleteSubmissionFromDB(record.id);
    }
    return NextResponse.json({ message: "Success" }, { status: 200 });
}
