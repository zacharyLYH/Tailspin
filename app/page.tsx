import ScrollToTop from "@/components/ui/back-to-top";
import { Hero } from "@/components/landing/hero";
import { Navigation } from "@/components/landing/navigation";
import SiteCounter from "@/components/landing/stats";
import AboutTailspin from "@/components/landing/about-tailspin";
import FAQ from "@/components/landing/faq";
import Timeline from "@/components/landing/timeline";
import ThanksPage from "@/components/landing/thanks";
import StepperCard from "@/components/ui/useCode/StepperCard";
import RatingBody from "@/components/core/rating-area/rating-component";
// import WavyScrollProvider from "@/components/providers/Wavy-Scroll-Provider";

const ComponentsWithScroll: React.FC = () => {
    return (
        <>
            <section
                id='stepper'
                className='relative flex h-screen items-center justify-center bg-white'
            >
                <div className='pointer-events-auto absolute inset-0 z-20 bg-white bg-opacity-50 xl:hidden' />
                <div className='absolute inset-0 z-30 flex items-center justify-center xl:hidden'>
                    <div className='w-3/4 max-w-lg rounded-xl bg-black p-6 shadow-lg'>
                        <h2 className='mb-4 text-center text-xl font-bold text-white'>
                            It looks like you&quot;re on a small screen
                        </h2>
                        <p className='text-sm font-semibold text-gray-400'>
                            We hate to be non-inclusive towards phones and
                            tablets, however we want to provide you with the
                            best experience possible!
                        </p>
                    </div>
                </div>
                <StepperCard />
            </section>
            <section className='flex flex-col md:flex-row'>
                <SiteCounter />
                <Timeline />
            </section>
            <section>
                <FAQ />
            </section>
            {/* <section>
                <Timeline />
            </section> */}
            <section>
                <ThanksPage />
            </section>
            <section>
                <RatingBody />
            </section>
        </>
    );
};

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
            <ComponentsWithScroll />
        </main>
    );
}
