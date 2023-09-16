import Image from "next/image";

interface StaticImageProps {
    challengeImageURL: string;
}

export const StaticImage: React.FC<StaticImageProps> = ({
    challengeImageURL,
}) => {
    return (
        <div className="flex items-center justify-center h-full w-full">
            <Image
                src={challengeImageURL}
                alt="image"
                width={500}
                height={500}
            />
        </div>
    );
};
