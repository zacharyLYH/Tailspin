import LandingPageChallengeCode from "@/components/landing/test-challenges/challenge-code";
import axios from "axios";
import { NextResponse } from "next/server";
import OpenAI from "openai";

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

export async function POST(req: Request) {
    const body = await req.json();
    const {
        code,
        dateTime,
        email,
        challenge,
    }: { code: string; dateTime: string; email: string; challenge: string } =
        body;
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
            //add this to the db for retrying later
            return NextResponse.json(
                {
                    message: `Error occured. Adding this to the DB for processing later.`,
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
    // Extract the host and protocol from the incoming request
    const url = new URL(req.url);
    const baseUrl = `${url.protocol}//${url.host}`;

    axios.post(`${baseUrl}/api/feedback/result`, {
        score,
        challenge,
        code,
        dateTime,
        email,
    });
    return NextResponse.json({ message: "Success" }, { status: 200 });
}
