import ScrollToTop from "@/components/ui/back-to-top";
import { Hero } from "@/components/landing/hero";
import { Navigation } from "@/components/landing/navigation";
import SiteCounter from "@/components/landing/stats";
import AboutTailspin from "@/components/landing/about-tailspin";
import FAQ from "@/components/landing/faq";
import Timeline from "@/components/landing/timeline";
import ThanksPage from "@/components/landing/thanks";
import RatingBody from "@/components/core/rating-area/rating-component";
import GrowOnScroll from "@/components/ui/grow-on-scroll";
import Footer from "@/components/landing/footer";
import ComponentCarousel from "@/components/ui/component-carousel";
import { Separator } from "@/components/ui/separator";
import ChallengeMain from "@/components/landing/challenge/challenge-main";
import TestEmail from "@/components/landing/delete";

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
                className='relative flex h-screen items-center justify-center bg-gradient-to-r from-orange-400 to-pink-500'
            >
                <div className='pointer-events-auto absolute inset-0 z-20 bg-white bg-opacity-50 xl:hidden' />
                <div className='absolute inset-0 z-30 flex items-center justify-center xl:hidden'>
                    <div className='w-3/4 max-w-lg rounded-xl bg-black p-6 shadow-lg'>
                        <h2 className='mb-4 text-center text-xl font-bold text-white'>
                            It looks like you&quot;re on a small screen
                        </h2>
                        <p className='text-sm font-semibold text-gray-400'>
                            We hate to be non-inclusive towards phones and
                            tablets, however coding on small screens is
                            currently unsupported! Try us on your
                            laptop/desktop!
                        </p>
                    </div>
                </div>
                <ChallengeMain />
            </section>
            <GrowOnScroll className='flex flex-col items-center justify-center md:flex-row'>
                <SiteCounter />
                <Timeline />
            </GrowOnScroll>
            <Separator />
            <section>
                <ComponentCarousel
                    nodes={[<FAQ key='faq' />, <ThanksPage key='thanksPage' />]}
                    title='Incase you were wondering...'
                />
            </section>
            <Separator />
            <section id='rating'>
                <RatingBody />
            </section>
            <section>
                <Footer />
            </section>
            <section>
                <TestEmail />
            </section>
        </main>
    );
}
