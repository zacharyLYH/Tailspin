import { CheckCircle } from "lucide-react";

interface CheckMarkSuccessStateProps {
    className?: string;
}

/*
Good for use with buttons that don't produce a UI side effect, like opening a modal for example. A use case is formatting code. 
*/
const CheckMarkSuccessState: React.FC<CheckMarkSuccessStateProps> = ({
    className,
}) => {
    const style = className ? className : "w-5 h-5";
    return <CheckCircle className={style} />;
};

export default CheckMarkSuccessState;
