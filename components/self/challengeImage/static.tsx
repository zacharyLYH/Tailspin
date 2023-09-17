import Image from "next/image";

interface StaticImageProps {
    challengeImageURL: string;
}

export const StaticImage: React.FC<StaticImageProps> = ({
    challengeImageURL,
}) => {
    return (
        <div className="h-full w-full relative">
            <Image
                src={challengeImageURL}
                alt="image"
                fill={true}
                objectFit="contain"
            />
        </div>
    );
};
