"use client";

import axios from "axios";
import { Button } from "../ui/button";

const TestEmail = () => {
    const emailApi = async () => {
        const data = await axios.post("/api/test");
        console.log(data);
    };
    const scoreApi = async () => {
        const data = await axios.post("/api/code/score");
        console.log(data);
    };
    return (
        <>
            <Button onClick={emailApi}>Test Email</Button>
            <Button onClick={scoreApi}>Test Score</Button>
        </>
    );
};

export default TestEmail;
