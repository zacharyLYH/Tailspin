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
        <div id='tabsSection'>
            <h1 className='mt-2 flex flex-wrap items-center justify-center text-center font-semibold italic text-green-500'>
                🔈 Tailspin is still in development! Click on the face
                <span className='mx-1 block min-w-[30px] hover:cursor-pointer'>
                    <FeedbackModal />
                </span>
                and help make Tailspin great!
            </h1>

            <div className='relative'>
                <div className='pointer-events-auto absolute inset-0 z-20 bg-white bg-opacity-50 xl:hidden' />
                <div className='absolute inset-0 z-30 flex items-center justify-center xl:hidden'>
                    <div className='w-3/4 max-w-lg rounded-xl bg-black p-6 shadow-lg'>
                        <h2 className='mb-4 text-center text-xl font-bold text-white'>
                            It looks like you're on a small screen
                        </h2>
                        <p className='text-sm font-semibold text-gray-400'>
                            We hate to be non-inclusive towards phones and
                            tablets, however we want to provide you with the
                            best experience possible!
                        </p>
                    </div>
                </div>
                <Tabs defaultValue='tutorial' className='z-10 mt-2 w-full'>
                    <TabsList className='mx-auto flex'>
                        <TabsTrigger className='w-1/3' value='tutorial'>
                            Quick Start{" "}
                            <GraduationCap className='ml-1 h-4 w-4' />
                        </TabsTrigger>
                        <TabsTrigger className='w-1/3' value='image'>
                            Sample Image <LucideImg className='ml-1 h-4 w-4' />
                        </TabsTrigger>
                        <TabsTrigger className='w-1/3' value='code'>
                            Code Area <Code className='ml-1 h-4 w-4' />
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent
                        value='tutorial'
                        className='mx-auto h-[90vh] max-w-screen-xl '
                    >
                        <TutorialPage />
                    </TabsContent>
                    <TabsContent value='image' className='h-[90vh]'>
                        <BrowserMockup>
                            <StaticPrompt
                                code={completeCode(
                                    LandingPageChallengeCode("helloWorld")
                                )}
                            />
                        </BrowserMockup>
                    </TabsContent>
                    <TabsContent value='code'>
                        <div className='grid h-[90vh] grid-cols-3 gap-1'>
                            <Editor className='col-span-1' />
                            <Preview className='col-span-2' />
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
};
