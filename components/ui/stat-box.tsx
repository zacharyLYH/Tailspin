export const Box = (props: any) => {
    return (
        <div className='flex items-center justify-center rounded-lg bg-slate-800 object-center'>
            {" "}
            {props.children}{" "}
        </div>
    );
};
