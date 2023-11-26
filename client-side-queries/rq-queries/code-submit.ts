import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function getCodeSubmitCount() {
    const { data } = useQuery({
        queryKey: ["None"],
        queryFn: async () => {
            const resp = await axios.get("/api/code/submit");
            return resp;
        },
    });
    const resp = data?.data.fieldVal;
    return resp;
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
