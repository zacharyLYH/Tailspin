import ScrollToTop from "@/components/self/back-to-top";
import { Hero } from "@/components/self/landing/hero";
import { TabSection } from "@/components/self/landing/tabs";

export default function Home() {
    return (
        <main className="h-full overflow-auto">
            <ScrollToTop />
            <div className="h-screen w-full bg-gradient-to-b from-[#493b6c] via-[#14243a] to-[#000000]">
                <div className="mx-auto max-w-screen-xl h-full w-full flex items-center justify-center">
                    <Hero />
                </div>
            </div>
            <div className="fkex justify-center h-screen" id="tabsSection">
                <TabSection />
            </div>
        </main>
    );
}
