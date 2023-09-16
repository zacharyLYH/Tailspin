import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Image as LucideImg, Code } from "lucide-react";
import Editor from "@/components/self/editor";
import Preview from "@/components/self/preview";
import { StaticImage } from "../challengeImage/static";
import { BrowserMockup } from "@/components/ui/browserMockup";

export const TabSection = () => {
    return (
        <div className="h-screen" id="tabsSection">
            <h1 className="text-green-300 text-center">
                Tailspin is still in development! Give us feedback here.
            </h1>
            <Tabs defaultValue="image" className="w-full mt-4">
                <TabsList className="flex mx-64">
                    <TabsTrigger className="w-1/2" value="image">
                        Sample Image <LucideImg className="w-4 h-4 ml-1" />
                    </TabsTrigger>
                    <TabsTrigger className="w-1/2" value="code">
                        Code Area <Code className="w-4 h-4 ml-1" />
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="image" className="h-[90vh]">
                    <BrowserMockup>
                        <StaticImage challengeImageURL="/vercel.svg" />
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
