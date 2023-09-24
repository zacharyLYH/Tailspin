import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Image as LucideImg, Code, GraduationCap } from "lucide-react";
import Editor from "@/components/core/editor";
import Preview from "@/components/core/preview";
import { StaticPrompt } from "../providers/static-challenge-provider";
import { BrowserMockup } from "@/components/ui/browserMockup";
import { FeedbackModal } from "@/components/landing/feedback/feedback-modal";
import { TutorialPage } from "./tutorial";
import LandingPageChallengeCode from "./test-challenges/challenge-code";
import completeCode from "@/lib/code-complete";

export const TabSection = () => {
    return (
        <div id="tabsSection">
            <h1 className="text-green-500 text-center font-semibold italic mt-2">
                🔈 Tailspin is still in development! Click on the face{" "}
                <FeedbackModal /> and help make Tailspin great!
            </h1>
            <Tabs defaultValue="tutorial" className="w-full mt-2">
                <TabsList className="flex mx-auto">
                    <TabsTrigger className="w-1/3" value="tutorial">
                        Quick Start <GraduationCap className="w-4 h-4 ml-1" />
                    </TabsTrigger>
                    <TabsTrigger className="w-1/3" value="image">
                        Sample Image <LucideImg className="w-4 h-4 ml-1" />
                    </TabsTrigger>
                    <TabsTrigger className="w-1/3" value="code">
                        Code Area <Code className="w-4 h-4 ml-1" />
                    </TabsTrigger>
                </TabsList>
                <TabsContent
                    value="tutorial"
                    className="mx-auto max-w-screen-xl h-[90vh] "
                >
                    <TutorialPage />
                </TabsContent>
                <TabsContent value="image" className="h-[90vh]">
                    <BrowserMockup>
                        <StaticPrompt
                            code={completeCode(LandingPageChallengeCode())}
                        />
                    </BrowserMockup>
                </TabsContent>
                <TabsContent value="code">
                    <div className="grid grid-cols-3 gap-1 h-[90vh]">
                        <Editor className="col-span-1" />
                        <Preview className="col-span-2" />
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
};
