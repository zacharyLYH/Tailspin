import ScrollToTop from "@/components/ui/back-to-top";
import { Hero } from "@/components/landing/hero";
import { Navigation } from "@/components/landing/navigation";
import SiteCounter from "@/components/landing/site-counter";
import AboutTailspin from "@/components/landing/about-tailspin";
import FAQ from "@/components/landing/faq";
import Timeline from "@/components/landing/timeline";
import ThanksPage from "@/components/landing/thanks";
import StepperCard from "@/components/ui/useCode/StepperCard";
import RatingBody from "@/components/core/rating-area/rating-component";

export default function Home() {
    return (
        <main className='mx-auto h-full w-full overflow-clip'>
            <ScrollToTop />

            <Navigation />

            <section
                id='landing'
                className='h-screen w-full bg-gradient-to-b from-[#493b6c] via-[#14243a] to-[#000000]'
            >
                <div className='mx-auto flex h-full w-full max-w-screen-xl items-center justify-center'>
                    <Hero />
                </div>
            </section>
            <section id='about'>
                <AboutTailspin />
            </section>
            <section
                id='stepper'
                className='flex h-screen items-center justify-center'
            >
                <StepperCard />
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
            <section>
                <RatingBody />
            </section>
        </main>
    );
}
