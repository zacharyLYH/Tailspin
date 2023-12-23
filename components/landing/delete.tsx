"use client";

import axios from "axios";
import { Button } from "../ui/button";

const TestEmail = () => {
    const emailApi = () => {
        axios.post("/api/test");
    };
    return <Button onClick={emailApi}>Test Email</Button>;
};

export default TestEmail;
