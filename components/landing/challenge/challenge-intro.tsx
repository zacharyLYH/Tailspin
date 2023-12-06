import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface ChallengeIntroProps {
    button: () => React.ReactNode;
}

const ChallengeIntro: React.FC<ChallengeIntroProps> = ({ button }) => {
    return (
        <Card className='mx-auto my-8 h-[420px] w-2/3 rounded-2xl bg-gray-800'>
            <CardHeader className='p-4'>
                <CardTitle className='mb-4 text-3xl font-semibold text-white'>
                    We&apos;re glad you&apos;re here!
                </CardTitle>
                <CardDescription>
                    <Badge className='rounded-full bg-blue-400 px-2 py-1 text-white'>
                        Alpha
                    </Badge>
                </CardDescription>
            </CardHeader>
            <Separator className='bg-gray-700' />
            <CardContent className='p-4'>
                <p className='text-gray-300'>
                    It&apos;s simple. We&apos;ll provide you a coding
                    environment and a target image. Your job is to recreate that
                    image using{" "}
                    <span className='font-semibold text-green-500'>HTML</span>{" "}
                    and{" "}
                    <span className='font-semibold text-green-500'>
                        TailwindCSS
                    </span>
                    . After you submit, we&apos;ll send your scores via Email
                    📧.
                </p>
            </CardContent>
            <CardFooter className='p-4'>
                <p className='text-sm text-muted-foreground'>
                    At this stage, we&apos;re presenting a bare bones look at
                    what&apos;s to come for Tailspin and looking for{" "}
                    <Link href='#rating' className='text-blue-500 underline'>
                        feedback
                    </Link>
                    !
                </p>
            </CardFooter>
            <Separator className='bg-gray-700' />
            <div className='flex items-center justify-center p-4'>
                {button()}
            </div>
        </Card>
    );
};

export default ChallengeIntro;
