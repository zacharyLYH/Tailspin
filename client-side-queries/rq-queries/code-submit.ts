import axios from "axios";

export async function getCodeSubmitCount() {
    const resp = await axios.get("/api/code/submit");
    return resp.data?.fieldVal;
}

interface UsePostSubmitCountProps {
    code: string;
    dateTime: string;
    email: string;
    challenge: string;
}

export async function postSubmitCount({
    code,
    dateTime,
    email,
    challenge,
}: UsePostSubmitCountProps) {
    const resp = await axios.post("/api/code/submit", {
        code: code,
        dateTime: dateTime,
        email: email,
        challenge: challenge,
    });
    return resp.data;
}
