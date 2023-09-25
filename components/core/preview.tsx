"use client";

import { Loader2 } from "lucide-react";
import useSessionStore from "@/data-store/session-store";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import useToggleFullScreen from "@/data-store/full-screen-store";
import LandingPageCode from "../landing/test-challenges/placeholder-code";
import { useEffect } from "react";
import { BrowserMockup } from "@/components/ui/browserMockup";
import Iframe from "@/components/core/iframe";
import completeCode from "@/lib/code-complete";

interface EditorProps {
    className?: string;
}

const Preview: React.FC<EditorProps> = ({ className }) => {
    const { code, userIframeSession, setCode, loading } = useSessionStore();
    const { fullScreen, toggleFullScreen } = useToggleFullScreen();
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
