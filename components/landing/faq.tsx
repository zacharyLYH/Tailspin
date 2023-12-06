"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const FAQ = () => {
    return (
        <div
            className='flex min-w-full flex-col items-center justify-center'
            id='accordion'
        >
            <span className='bold text-center text-2xl italic'>FAQ</span>
            <Accordion
                type='single'
                collapsible
                className='max-h-96 w-96 overflow-y-scroll'
            >
                <AccordionItem value='item-1'>
                    <AccordionTrigger>
                        Sounds like an interesting app... What&apos;s the catch?
                    </AccordionTrigger>
                    <AccordionContent>
                        This product is community driven, and not developed and
                        maintained under the comfortable belly of a large
                        private enterprise. In other words, Tailspin is not a
                        polished product. Our business model relies heavily on
                        community input for
                        <br />
                        <ul className='list-disc pl-5'>
                            <li className='mb-2 text-muted-foreground'>
                                Creating more Target images (images to
                                recreate).
                            </li>
                            <li className='mb-2 text-muted-foreground'>
                                Enforce Tailspin&apos;s fair-play policy by
                                helping verify suspicious submissions.
                            </li>
                            <li className='mb-2 text-muted-foreground'>
                                Active development, innovation, and small
                                donations for small payments for databases,
                                hosting environments etc.
                            </li>
                        </ul>
                        <br />
                        Besides these aforementioned limitations, check out the
                        next accordion to understand how we are an{" "}
                        <span className='font-bold text-red-500'>
                            unpolished
                        </span>{" "}
                        product.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-2'>
                    <AccordionTrigger>
                        How are submissions graded?
                    </AccordionTrigger>
                    <AccordionContent>
                        We mentioned we use GPT3.5 in the{" "}
                        <Link
                            href='#about-section'
                            className='text-blue-500 underline'
                        >
                            About
                        </Link>{" "}
                        section. We considered a few other methods, such as
                        <br />
                        <ul className='list-disc pl-5'>
                            <li className='mb-2 text-muted-foreground'>
                                Pixel matching libraries like{" "}
                                <Link
                                    href='https://www.npmjs.com/package/pixelmatch'
                                    className='text-blue-500 underline'
                                >
                                    pixelmatch
                                </Link>
                            </li>
                            <li className='mb-2 text-muted-foreground'>
                                Image-SSIM techniques like{" "}
                                <Link
                                    href='https://www.npmjs.com/package/image-ssim'
                                    className='text-blue-500 underline'
                                >
                                    image-ssim
                                </Link>
                            </li>
                            <li className='mb-2 text-muted-foreground'>
                                Mathematical based approaches like{" "}
                                <Link
                                    href='https://en.wikipedia.org/wiki/Image_histogram#:~:text=An%20image%20histogram%20is%20a,tonal%20distribution%20at%20a%20glance.'
                                    className='text-blue-500 underline'
                                >
                                    image histogram
                                </Link>
                                .
                            </li>
                        </ul>
                        <br />
                        However, these techniques all suffer from images with a
                        lot of common (usually white) background. Namely, since
                        2 images share a lot of the same white background,
                        similarity scores suffer from extreme false positives.
                        The underlying issue is that these algorithms do not
                        take into account the{" "}
                        <span className='text-green-500'>
                            semantic meaning
                        </span>{" "}
                        of submissions. The remedy is to use something
                        intelligent to extract{" "}
                        <span className='text-red-500'>intention</span> out of
                        code, and using today&apos;s technology, we looked no
                        further than LLMs.
                        <br />
                        This implementation is not great because
                        <br />
                        <ul className='list-disc pl-5'>
                            <li className='mb-2 text-muted-foreground'>
                                LLM responses are usually non-deterministic.
                            </li>
                            <li className='mb-2 text-muted-foreground'>
                                LLMs are expensive to use.
                            </li>
                            <li className='mb-2 text-muted-foreground'>
                                LLMs are not bullet-proof at doing this. Through
                                testing, we&apos;ve found that their responses
                                are inconsistent and bias towards false
                                positives.
                            </li>
                        </ul>
                        <br />
                        Nevertheless, these were the tradeoffs made to provide
                        the best possible experience with the least amount of
                        resources, the rest is up to the community. Moving
                        forward, a possible direction might be to bake an
                        in-house Computer Vision software that we&apos;ll host
                        in-house, that way we get the benefits of keeping costs
                        low yet having a tunable and customizable intelligent
                        sematic analysis tool that exactly fits the kind of
                        images we hope to compare.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-3'>
                    <AccordionTrigger>
                        I&apos;m a noob/average/pro/better-than-you developer.
                        How can I contribute?
                    </AccordionTrigger>
                    <AccordionContent>
                        First and foremost, thank you for even considering. We
                        would absolutely love to get in touch with you. Tailspin
                        is built by the community for the community afterall.
                        Hit us up at{" "}
                        <Link
                            className='text-blue-500 underline'
                            href='mailto:tailspin.official@gmail.com'
                        >
                            tailspin.official@gmail.com
                        </Link>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-4'>
                    <AccordionTrigger>
                        Not an FAQ, but in the spirit of transparency...
                    </AccordionTrigger>
                    <AccordionContent>
                        Target images are not actually images - they are plain
                        vanilla html and Tailwind that gets injected into an
                        iframe. So yes, you may{" "}
                        <Link
                            href='https://zapier.com/blog/inspect-element-tutorial/'
                            className='text-blue-500 underline'
                        >
                            inspect element
                        </Link>{" "}
                        right now and see the solution! In a pathetic attempt to
                        dissuade folks from doing so, we&apos;ve disabled the
                        context-menu when you&apos;re on that page. However, we
                        did not disable the default keyboard shortcut that will
                        pull up your context-menu. All we have to say is this:
                        <span className='text-red-500'>
                            You stand to gain nothing cheating here.
                        </span>
                        No knowledge, no bragging rights, no community. All you
                        do is actively pervert the spirit of our tight knit
                        community.
                        <p className='mt-1'>
                            In the meantime, this is an active issue we are
                            doing research and development on, however, the
                            challenges we face are non-trivial. Reach out if
                            you&apos;re curious or have a no-brainer solution!
                        </p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-5'>
                    <AccordionTrigger>
                        When are we implementing accounts?
                    </AccordionTrigger>
                    <AccordionContent>
                        In this Alpha stage, our plan is to gather feedback from
                        users before we roll out stateful user accounts.
                        We&apos;re doing this to test the waters and viability
                        of the concept of Tailspin because developing good
                        quality software takes time and effort. That said, if
                        you haven&apos;t given us feedback, you may do so{" "}
                        <Link
                            href='#rating'
                            className='text-blue-500 underline'
                        >
                            here
                        </Link>
                        !
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-6'>
                    <AccordionTrigger>
                        Why do I have to provide my email in the playground?
                    </AccordionTrigger>
                    <AccordionContent>
                        To make it harder for bad people to spam us and to
                        provide you with a better experience. Tailspin&apos;s
                        tech stack includes a managed database, GPT3.5, and
                        serverless compute. We don&apos;t want our resources
                        being abused so we insist on an email so that it becomes
                        an extra layer of effort for bad actors to misuse
                        Tailspin. As mentioned, Tailspin uses GPT3.5 and
                        serverless compute. These technologies can take a long
                        time, depending on the total load on these services from
                        other applications. As such, in order to facilitate an
                        asynchronous processing experience, we are essentially
                        running these longer tasks in the background; so we have
                        to send you the results of processing in an asynchronous
                        fashion too - email!
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default FAQ;
