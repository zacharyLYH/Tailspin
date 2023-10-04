import ScrollToTop from "@/components/ui/back-to-top";
import { Hero } from "@/components/landing/hero";
import { TabSection } from "@/components/landing/tabs";
import { Navigation } from "@/components/landing/navigation";

export default function Home() {
    return (
        <main className='mx-auto h-full w-full overflow-clip bg-gradient-to-b from-[#493b6c] via-[#14243a] to-[#000000]'>
            <ScrollToTop />

            <Navigation></Navigation>

            {/*landing page*/}
            <section
                id='landing'
                className='h-screen w-full bg-gradient-to-b from-[#493b6c] via-[#14243a] to-[#000000]'
            >
                <div className='mx-auto flex h-full w-full max-w-screen-xl items-center justify-center'>
                    <Hero />
                </div>
            </section>

            {/*quickstart/sampleimage/codearea*/}
            <section id='tabsSection'>
                <TabSection />
            </section>
        </main>
    );
}
