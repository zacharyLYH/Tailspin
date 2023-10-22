"use client";
import { Button } from "@/components/ui/button";
import { useFormatCode } from "@/lib/codeFormatter";

const CodeAreaFormatCode = () => {
    const { handleFormatCode } = useFormatCode();

    return (
        <Button onClick={handleFormatCode} className='bg-purple-500 text-white'>
            Format code
        </Button>
    );
};

export default CodeAreaFormatCode;
