import ScrollToTop from "@/components/ui/back-to-top";
import { Hero } from "@/components/landing/hero";
import { TabSection } from "@/components/landing/tabs";

export default function Home() {
    return (
        <main className="h-full overflow-auto">
            <ScrollToTop />
            <section className="h-screen w-full bg-gradient-to-b from-[#493b6c] via-[#14243a] to-[#000000]">
                <div className="mx-auto max-w-screen-xl h-full w-full flex items-center justify-center">
                    <Hero />
                </div>
            </section>
            <section id="tabsSection">
                <TabSection />
            </section>
        </main>
    );
}
