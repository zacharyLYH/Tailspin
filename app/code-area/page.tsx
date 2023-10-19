import Editor from "@/components/core/editor";
import Preview from "@/components/core/preview";

const CodeArea = () => {
    return (
        <div className='flex h-screen'>
            <Editor className='flex-1' />
            <Preview className='flex-1' />
        </div>
    );
};

export default CodeArea;
