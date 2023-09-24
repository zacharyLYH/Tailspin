import FeedbackEmail from "@/components/landing/feedback/feedback-email";
import { render } from "@react-email/render";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const {
            name,
            email,
            message,
        }: { name: string; email: string; message: string } = body;
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            },
        });
        const emailHtml = render(FeedbackEmail({ name, email, message }));
        const options = {
            from: process.env.EMAIL,
            to: process.env.EMAIL,
            subject: `Feedback from ${name}`,
            html: emailHtml,
        };
        await transporter.sendMail(options);
        return NextResponse.json({ message: "Success" }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
}
