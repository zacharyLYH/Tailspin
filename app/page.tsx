import ScrollToTop from "@/components/ui/back-to-top";
import { Hero } from "@/components/landing/hero";
import { TabSection } from "@/components/landing/tabs";
import { Navigation } from "@/components/landing/navigation";
import SiteCounter from "@/components/landing/site-counter";
import AboutTailspin from "@/components/landing/about-tailspin";
import FAQ from "@/components/landing/faq";
import Timeline from "@/components/landing/timeline";
import ThanksPage from "@/components/landing/thanks";

export default function Home() {
    return (
        <main className='mx-auto h-full w-full overflow-clip bg-gradient-to-b from-[#493b6c] via-[#14243a] to-[#000000]'>
            <ScrollToTop />

            <Navigation />

            {/*landing page*/}
            <section
                id='landing'
                className='h-screen w-full bg-gradient-to-b from-[#493b6c] via-[#14243a] to-[#000000]'
            >
                <div className='mx-auto flex h-full w-full max-w-screen-xl items-center justify-center'>
                    <Hero />
                </div>
            </section>
            <section>
                <AboutTailspin />
            </section>
            <section id='tabsSection'>
                <TabSection />
            </section>
            <section className='container'>
                <div>
                    <SiteCounter />
                </div>
            </section>
            <section>
                <FAQ />
            </section>
            <section>
                <Timeline />
            </section>
            <section>
                <ThanksPage />
            </section>
        </main>
    );
}
