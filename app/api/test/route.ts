import FeedbackEmail from "@/components/landing/feedback/feedback-email";
import { render } from "@react-email/render";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { Options } from "nodemailer/lib/mailer";

export async function POST() {
    try {
        console.log("ENTERED TEST EMAIL");
        const transporter = nodemailer.createTransport({
            port: 465,
            host: "smtp.gmail.com",
            // service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            },
            secure: true,
        });
        await new Promise((resolve, reject) => {
            // verify connection configuration
            transporter.verify(function (error, success) {
                if (error) {
                    console.log(error);
                    reject(error);
                } else {
                    console.log("Server is ready to take our messages");
                    resolve(success);
                }
            });
        });
        console.log("CREATED TRANSPORTER");
        const emailHtml = render(
            FeedbackEmail({
                name: "TESTING02",
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
        // await new Promise((resolve, reject) => {
        //     // send mail
        //     transporter.sendMail(options, (err, info) => {
        //         if (err) {
        //             console.error(err);
        //             reject(err);
        //         } else {
        //             console.log(info);
        //             resolve(info);
        //         }
        //     });
        // });
        const sendMessage = async (options: Options) => {
            await transporter.sendMail(options);
        };
        await sendMessage(options);
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
