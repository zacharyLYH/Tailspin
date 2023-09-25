export const ArrowHead = ({
    className,
    strokeWidth,
}: {
    className: string;
    strokeWidth: string;
}) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 24 24'
            stroke='currentColor'
            className={className}
        >
            <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={strokeWidth}
                d='M19 14l-7 7m0 0l-7-7'
            ></path>
        </svg>
    );
};
