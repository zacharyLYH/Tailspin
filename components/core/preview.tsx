"use client";

import useSessionStore from "@/data-store/session-store";
import { Button } from "@/components/ui/button";
import LandingPageCode from "../landing/test-challenges/placeholder-code";
import { useEffect } from "react";
import { BrowserMockup } from "@/components/ui/browserMockup";
import Iframe from "@/components/core/iframe";
import completeCode from "@/lib/code-complete";
import { getSample } from "@/client-side-queries/sample-query/sample";
import ConfettiButton from "@/components/ui/confetti-button";

const Preview = () => {
    const { code, userIframeSession, setCode } = useSessionStore();
    const { isLoading, isError, data, error, refetch } = getSample();

    useEffect(() => {
        if (code === "") {
            setCode(LandingPageCode());
        }
    }, []);
    return (
        <div className='flex h-full flex-col rounded-lg'>
            <div className='flex flex-row space-x-2'>
                <Button
                    onClick={() => refetch()}
                    className='bg-purple-500 text-white'
                >
                    Sample data fetching
                </Button>
                <ConfettiButton className='bg-purple-500'>
                    Submit
                </ConfettiButton>
            </div>
            <BrowserMockup>
                <Iframe
                    userIframeSession={userIframeSession}
                    title='Preview'
                    completedCode={completeCode(code)}
                    className='w-full flex-grow rounded-b-lg border-t border-gray-300'
                />
            </BrowserMockup>
        </div>
    );
};

export default Preview;
