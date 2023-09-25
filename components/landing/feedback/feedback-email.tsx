import {
    Body,
    Button,
    Container,
    Column,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Tailwind,
    Text,
} from "@react-email/components";

interface FeedbackEmailProps {
    name: string;
    email: string;
    message: string;
}

export default function FeedbackEmail({
    name,
    email,
    message,
}: FeedbackEmailProps) {
    return (
        <Html>
            <Head />
            <Preview>Feedback from {name}</Preview>
            <Tailwind>
                <Body className='mx-auto my-auto bg-white font-sans'>
                    <Container className='mx-auto my-[40px] w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]'>
                        <Heading className='mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black'>
                            Reply to {email}
                        </Heading>
                        <Text className='text-[14px] leading-[24px] text-black'>
                            {message}
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}
