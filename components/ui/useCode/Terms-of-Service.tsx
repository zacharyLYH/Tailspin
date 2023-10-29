import { Checkbox } from "@/components/ui/checkbox";

export function TermsOfServiceBox() {
    return (
        <>
            <div className='flex flex-row'>
                <Checkbox className='mx-4 mt-[5px]' />
                <p>
                    By checking the box, you are confirming that you have read
                    and agree to&nbsp;
                    {/* TODO: Replace this to link to a seperate page for Terms and Services */}
                    <a
                        href='https://www.google.com'
                        className='italic text-blue-500 underline'
                    >
                        Tailspin&apos;s terms &amp; conditions.
                    </a>
                </p>
            </div>
        </>
    );
}

export default TermsOfServiceBox;
