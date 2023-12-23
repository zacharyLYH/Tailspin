import nodemailer from "nodemailer";
import ScoreEmail from "../../code/score/result-email-template";
import { render } from "@react-email/render";

export default async function sendScoreResultEmail(
    score: string,
    challenge: string,
    code: string,
    dateTime: string,
    email: string
) {
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        },
        secure: true,
    });
    const emailHtml = render(ScoreEmail({ score, challenge, code, dateTime }));
    const options = {
        from: `"Tailspin Team" <tailspin.official@gmail.com>"`,
        to: email,
        subject: `The results are in!`,
        html: emailHtml,
    };
    const sendMessage = async (options: {
        from: string | undefined;
        to: string;
        subject: string;
        html: string;
    }) => {
        await transporter.sendMail(options);
    };
    await sendMessage(options);
}
