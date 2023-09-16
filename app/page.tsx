import Editor from "@/component/editor";
import Preview from "@/component/preview";
import { Image as LucideImg, Code } from "lucide-react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
    return (
        <main className="h-full bg-[#111827] overflow-auto">
            <div className="mx-auto max-w-screen-xl h-full w-full">
                <div className="h-full items-center justify-center">
                    <div className="text-white font-bold py-36 text-center space-y-5">
                        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
                            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                                Tailspin
                            </h1>
                        </div>
                        <div className="text-zinc-400 text-xs md:text-sm font-normal">
                            No credit card required.
                        </div>
                    </div>
                </div>
                <Tabs defaultValue="image" className="w-full">
                    <TabsList>
                        <TabsTrigger value="image">Image</TabsTrigger>
                        <TabsTrigger value="code">Code Area</TabsTrigger>
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
                        <div className="grid grid-cols-2 w-full">
                            <Editor />
                            <Preview />
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </main>
    );
}
