import Editor from "@/components/self/editor";
import Preview from "@/components/self/preview";
import { Image as LucideImg, Code } from "lucide-react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowHead } from "@/components/self/arrow";
import ScrollToTop from "@/components/self/back-to-top";

export default function Home() {
    return (
        <main className="h-full bg-gradient-to-b from-[#58618c] via-[#2d486d] to-[#111827] overflow-auto">
            <ScrollToTop />
            <div className="mx-auto max-w-screen-xl h-full w-full">
                {/* Hero Section */}
                <div className="h-screen flex items-center justify-center">
                    <div className="text-white font-bold py-36 text-center space-y-5">
                        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
                            <h1 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                                Tailspin
                            </h1>
                        </div>
                        <div className="text-zinc-400 text-xl font-normal">
                            Competitive Tailwind CSS
                        </div>
                        <a
                            href="#tabsSection"
                            className="flex flex-col items-center cursor-pointer"
                        >
                            <div className="animate-bounce w-12 h-12">
                                <ArrowHead
                                    className="w-12 h-12"
                                    strokeWidth="4"
                                />
                            </div>
                            <div className="animate-bounce delay-100 w-16 h-16">
                                <ArrowHead
                                    className="w-16 h-16"
                                    strokeWidth="4"
                                />
                            </div>
                            <div className="animate-bounce delay-200 w-20 h-20">
                                <ArrowHead
                                    className="w-20 h-20"
                                    strokeWidth="4"
                                />
                            </div>
                        </a>
                    </div>
                </div>
                {/* Tabs Section */}
                <div className="h-screen" id="tabsSection">
                    <Tabs defaultValue="image" className="w-full">
                        <TabsList className="flex">
                            <TabsTrigger className="w-1/2" value="image">
                                Image <LucideImg className="w-4 h-4 ml-1" />
                            </TabsTrigger>
                            <TabsTrigger className="w-1/2" value="code">
                                Code Area <Code className="w-4 h-4 ml-1" />
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="image">
                            <Image
                                src="vercel.svg"
                                alt="image"
                                width={500}
                                height={500}
                            />
                        </TabsContent>
                        <TabsContent value="code">
                            <div className="grid grid-cols-2">
                                <Editor />
                                <Preview />
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </main>
    );
}
