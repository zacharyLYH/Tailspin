import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BarChartBig } from "lucide-react";
import FlipOnScroll from "../ui/flip-on-scroll";

type AboutTailSpinBoxesProps = {
    title: string;
    paragraphComponent: React.ReactNode;
    footer?: React.ReactNode;
};

const AboutTailSpinBoxes: React.FC<AboutTailSpinBoxesProps> = ({
    title,
    paragraphComponent,
    footer,
}) => {
    return (
        <FlipOnScroll>
            <blockquote className='mx-auto mb-4 max-w-2xl text-gray-500 dark:text-gray-400 lg:mb-8'>
                <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                    {title}
                </h3>
                <div className='my-4'>{paragraphComponent}</div>
            </blockquote>
            {footer && (
                <figcaption className='flex items-center justify-center space-x-3'>
                    {footer}
                </figcaption>
            )}
        </FlipOnScroll>
    );
};

const AboutTailspin = () => {
    return (
        <div
            className='relative flex h-full flex-col items-center justify-center rounded-lg bg-black p-6'
            id='about-section'
        >
            <p className='mb-5 bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-center text-4xl font-bold text-transparent'>
                Tailspin
            </p>
            <div className='grid rounded-lg md:grid-cols-2'>
                <AboutTailSpinBoxes
                    title='Tailwind has revolutionized frontend development.'
                    paragraphComponent={
                        <p>
                            Show off your skills and compete against the world
                            for the bragging right of
                            <br />
                            <span className='font-semibold text-yellow-400'>
                                👑 World&apos;s greatest Tailspinner 👑
                            </span>
                            <br />
                            We&apos;ll provide you with a Target image, you
                            write code to reproduce that image.
                            <br />
                            <Link href='#stepper'>
                                <Button className='mt-2 bg-orange-500'>
                                    Try it out! 🏃
                                </Button>
                            </Link>
                        </p>
                    }
                />
                <AboutTailSpinBoxes
                    title='Powered by AI'
                    paragraphComponent={
                        <p>
                            Leveraging the power of OpenAI&apos;s GPT3.5, your
                            submissions are put through{" "}
                            <span className='text-green-700'>
                                semantic analysis
                            </span>{" "}
                            for a more robust scoring system. At Tailspin, we
                            care more about your process of engineering, rather
                            than how sensitive your eyes are to{" "}
                            <span className='text-red-500'>R</span>
                            <span className='text-green-500'>G</span>
                            <span className='text-blue-500'>B</span>!
                        </p>
                    }
                />
                <AboutTailSpinBoxes
                    title='Built by the community, for the community'
                    paragraphComponent={
                        <p>
                            Tailspin addresses a gap in the community for
                            competitive Tailwind and competitive web styling in
                            general. Tailspin&apos;s core services will be{" "}
                            <span className='font-bold text-green-300'>
                                FREE
                            </span>{" "}
                            forever. In order to afford being cost 0, we make a
                            few tradeoffs in functionality. Read more on that{" "}
                            <Link
                                href='#accordion'
                                className='text-blue-500 underline'
                            >
                                in the first accordion
                            </Link>
                            .
                        </p>
                    }
                />
                <AboutTailSpinBoxes
                    title='Code. Learn. Socialize.'
                    paragraphComponent={
                        <p>
                            Competition brings out passion, and passion brings
                            people together. More than a place to show off your
                            skills, Tailspin is also a place to meet and connect
                            with other frontend engineers. Our site gives our
                            users ample opportunity to display and market
                            themselves as frontend engineers, enabling you to
                            discover and meet like-minded people, and maybe even
                            hire/get hired 😉.
                            <br />
                            <Link href='#stepper'>
                                <Button className='mt-2 bg-orange-500'>
                                    Leaderboard{" "}
                                    <BarChartBig className='ml-2 h-4 w-4' />
                                </Button>
                            </Link>
                        </p>
                    }
                    footer={
                        <div className='absolute inset-0 flex items-center justify-center bg-slate-600 bg-opacity-50'>
                            <span className='absolute bottom-0 left-1/2 -translate-x-1/2 transform text-xl font-semibold text-red-500'>
                                In development
                            </span>
                        </div>
                    }
                />
            </div>
        </div>
    );
};

export default AboutTailspin;
