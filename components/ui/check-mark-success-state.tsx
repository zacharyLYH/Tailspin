import { CheckCircle } from "lucide-react";

interface CheckMarkSuccessStateProps {
    className?: string;
}

const CheckMarkSuccessState: React.FC<CheckMarkSuccessStateProps> = ({
    className,
}) => {
    const style = className ? className : "w-5 h-5";
    return <CheckCircle className={style} />;
};

export default CheckMarkSuccessState;
