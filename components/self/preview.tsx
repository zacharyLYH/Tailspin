"use client";

import { Loader2 } from "lucide-react";
import useSessionStore from "@/data-store/session-store";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import useToggleFullScreen from "@/data-store/full-screen-store";
import { captureIframe } from "@/lib/static-screenshot";
import LandingPageCode from "./landing/test-challenges/code";
import { useEffect } from "react";
import { LandingPageScorer } from "@/actions/landing-page-score";
import { LandingPageScorerV2 } from "@/actions/landing-page-score-v2";
import { BrowserMockup } from "@/components/ui/browserMockup";

interface EditorProps {
    className?: string;
}

const Preview: React.FC<EditorProps> = ({ className }) => {
    const { code, userIframeSession, setCode, loading } = useSessionStore();
    const { fullScreen, toggleFullScreen } = useToggleFullScreen();
    useEffect(() => {
        setCode(LandingPageCode());
    }, []);
    const completedCode = `<!doctype html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body>
          ${code}
        </body>
        </html>`;
    return (
        <div
            className={cn(
                "flex flex-col h-full rounded-lg",
                fullScreen ? "col-span-3" : className
            )}
        >
            <div className="flex flex-row space-x-2">
                <Button
                    onClick={toggleFullScreen}
                    className="bg-purple-500 text-white"
                >
                    {fullScreen ? "Minimize" : "Full Screen"}
                </Button>
                <Button
                    className="bg-green-500 "
                    onClick={() => captureIframe(true)}
                >
                    Screenshot
                </Button>
                {loading ? (
                    <>
                        <Button disabled>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Pixel comparison
                        </Button>
                        <Button disabled>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            SSIM
                        </Button>
                    </>
                ) : (
                    <>
                        <Button
                            className="bg-green-500 "
                            onClick={LandingPageScorer}
                        >
                            Pixel comparison
                        </Button>
                        <Button
                            className="bg-green-500 "
                            onClick={LandingPageScorerV2}
                        >
                            SSIM
                        </Button>
                    </>
                )}
            </div>
            <BrowserMockup>
                <iframe
                    ref={userIframeSession}
                    title="Preview"
                    srcDoc={completedCode}
                    width="100%"
                    height="100%"
                    allowFullScreen
                    className="border-t border-gray-300 flex-grow rounded-b-lg w-full"
                />
            </BrowserMockup>
        </div>
    );
};

export default Preview;
