interface StatBoxProps {
    icon: React.ReactNode;
    content: string;
}

const StatBox: React.FC<StatBoxProps> = ({ icon, content }) => {
    return (
        <div className='flex flex-col items-center text-center'>
            {icon}
            {content}
        </div>
    );
};

export default StatBox;
