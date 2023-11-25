import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const body = await req.json();
    const {
        code,
        dateTime,
        email,
        challenge,
    }: { code: string; dateTime: string; email: string; challenge: string } =
        body;
    //do openai call here
    const score = "58";
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
