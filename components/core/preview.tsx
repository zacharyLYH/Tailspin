"use client";

import useSessionStore from "@/data-store/session-store";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import useToggleFullScreen from "@/data-store/full-screen-store";
import LandingPageCode from "../landing/test-challenges/placeholder-code";
import { useEffect } from "react";
import { BrowserMockup } from "@/components/ui/browserMockup";
import Iframe from "@/components/core/iframe";
import completeCode from "@/lib/code-complete";
import { getSample } from "@/client-side-queries/sample-query/sample";
import ConfettiButton from "../ui/confetti-button";

import React from "react";

interface EditorProps {
    className?: string;
}

const Preview: React.FC<EditorProps> = ({ className }) => {
    const { code, userIframeSession, setCode } = useSessionStore();
    const { fullScreen, toggleFullScreen } = useToggleFullScreen();
    const { isLoading, isError, data, error, refetch } = getSample();

    useEffect(() => {
        if (code === "") {
            setCode(LandingPageCode());
        }
    }, []);
    return (
        <div
            className={cn(
                "flex h-full flex-col rounded-lg",
                fullScreen ? "col-span-3" : className
            )}
        >
            <div className='flex flex-row space-x-2'>
                <Button
                    onClick={toggleFullScreen}
                    className='bg-purple-500 text-white'
                >
                    {fullScreen ? "Minimize" : "Full Screen"}
                </Button>
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
