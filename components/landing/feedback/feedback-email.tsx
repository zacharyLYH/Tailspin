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
                <Body className="bg-white my-auto mx-auto font-sans">
                    <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
                        <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
                            Reply to {email}
                        </Heading>
                        <Text className="text-black text-[14px] leading-[24px]">
                            {message}
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}
