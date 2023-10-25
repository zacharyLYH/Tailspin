"use client";

import { Button } from "@/components/ui/button";
import CheckMarkSuccessState from "@/components/ui/check-mark-success-state";
import { useFormatCode } from "@/lib/codeFormatter";
import { useState } from "react";

/*
A button that once clicked will call a format code handler. The format code handler takes care of setting the formatted code back to the editor. 
*/
const CodeAreaFormatCode = () => {
    const { handleFormatCode } = useFormatCode();
    const [success, setSuccess] = useState(false);

    const handleClick = async () => {
        handleFormatCode();
        setSuccess(true);
        setTimeout(() => {
            setSuccess(false);
        }, 1000);
    };

    return (
        <Button
            onClick={handleClick}
            className={
                success
                    ? "transition-background bg-green-500 text-white duration-1000"
                    : "bg-purple-500 text-white"
            }
        >
            {success ? <CheckMarkSuccessState /> : "Format code"}
        </Button>
    );
};

export default CodeAreaFormatCode;
