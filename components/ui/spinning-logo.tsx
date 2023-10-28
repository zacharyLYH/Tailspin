import { Shell } from "lucide-react";

interface TailspinLogoProps {
    outershellClassname?: string;
}

export const TailspinLogo: React.FC<TailspinLogoProps> = ({
    outershellClassname,
}) => {
    return (
        <div className={outershellClassname}>
            <Shell className='h-full w-full text-orange-500' />
        </div>
    );
};
