import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Tailwind,
    Text,
} from "@react-email/components";

interface ScoreEmailProps {
    score: string;
    challenge: string;
    code: string;
    dateTime: string;
}

export default function ScoreEmail({
    score,
    challenge,
    code,
    dateTime,
}: ScoreEmailProps) {
    return (
        <Html>
            <Head />
            <Preview>Tailspin. Score of your submission at {dateTime}!</Preview>
            <Tailwind>
                <Body className='mx-auto my-auto bg-white font-sans'>
                    <Container className='mx-auto my-[40px] w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]'>
                        <Heading className='mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black'>
                            Congratulations. Our AI thinks your code had{" "}
                            <span className='font-bold text-yellow-500'>
                                {score}%
                            </span>{" "}
                            likeness to our challenge {challenge}.
                        </Heading>
                        <Text className='text-[14px] leading-[24px] text-black'>
                            Thank you for participating. We are a very small
                            platform and we&apos;re building Tailspin out of
                            enthusiasm for Frontend Development and the thrill
                            of a challenge. If you feel like your scores
                            weren&apos;t reflective of how well you actually
                            did, you might be right. Our AI needs more training
                            and we&apos;re constantly evolving. Here&apos;s your
                            code back:
                        </Text>
                        <Text className='rounded-md border border-gray-300 bg-gray-100 p-2 font-mono text-gray-800'>
                            {code}
                        </Text>
                        <Text className='text-center text-sm font-semibold text-muted-foreground'>
                            Interested in contributing? Tailspin is a hobby
                            project and Tailspin will always be free. Reach out
                            to us at{" "}
                            <a
                                href='mailto:tailspin.official@gmail.com'
                                className='text-blue-600 underline hover:text-blue-800'
                            >
                                tailspin.official@gmail.com
                            </a>
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}
