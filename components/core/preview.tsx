"use client";

import useSessionStore from "@/data-store/session-store";
import LandingPageCode from "../landing/test-challenges/placeholder-code";
import { useEffect } from "react";
import { BrowserMockup } from "@/components/ui/browserMockup";
import Iframe from "@/components/core/iframe";
import completeCode from "@/lib/code-complete";
import SubmitButton from "@/components/ui/submit-button";

const Preview = () => {
    const { code, userIframeSession, setCode } = useSessionStore();

    useEffect(() => {
        if (code === "") {
            setCode(LandingPageCode());
        }
    }, []);
    return (
        <div className='flex h-screen flex-col rounded-lg'>
            <SubmitButton />
            <BrowserMockup>
                <Iframe
                    userIframeSession={userIframeSession}
                    title='Preview'
                    completedCode={completeCode(code)}
                    className='pointer-events-none w-full flex-grow rounded-b-lg border-t border-gray-300'
                />
            </BrowserMockup>
        </div>
    );
};

export default Preview;
