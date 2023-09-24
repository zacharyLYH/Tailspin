import { RefObject } from "react";

interface IframeProps {
    userIframeSession: RefObject<HTMLIFrameElement>;
    completedCode: string;
    title: string;
    className?: string;
    width?: string;
    height?: string;
}

const Iframe: React.FC<IframeProps> = ({
    userIframeSession,
    completedCode,
    title,
    className,
    width = "100%", // Default value for width
    height = "100%", // Default value for height
}) => {
    return (
        <iframe
            ref={userIframeSession}
            title={title}
            srcDoc={completedCode}
            width={width}
            height={height}
            allowFullScreen
            className={className}
        />
    );
};

export default Iframe;
