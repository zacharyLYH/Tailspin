export const Box = (props: any) => {
    return (
        <div className='m:h-[500px] m:w-[600px] mx-auto mt-20 flex h-[400px] w-[400px] items-center justify-center rounded-lg bg-slate-800 object-center p-4'>
            {"   "}
            {props.children}{" "}
        </div>
    );
};
