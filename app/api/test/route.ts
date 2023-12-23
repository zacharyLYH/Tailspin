import FeedbackEmail from "@/components/landing/feedback/feedback-email";
import { render } from "@react-email/render";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function GET() {
    try {
        console.log("ENTERED TEST EMAIL");
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            },
        });
        console.log("CREATED TRANSPORTER");
        const emailHtml = render(
            FeedbackEmail({
                name: "TESTING01",
                email: "asdf",
                message: "Testing email in production",
            })
        );
        const options = {
            from: process.env.EMAIL,
            to: "leeyihong03@gmail.com",
            subject: `Just testing this email`,
            html: emailHtml,
        };
        console.log("CREATED OPTIONS");
        transporter.sendMail(options);
        console.log("SENT EMAIL");
        return NextResponse.json({ message: "Success" }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
}
