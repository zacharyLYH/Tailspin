export const Box = (props: any) => {
    return (
        <div className='mx-auto flex w-5/12 items-center justify-center rounded-lg bg-slate-800 object-center'>
            {" "}
            {props.children}{" "}
        </div>
    );
};
