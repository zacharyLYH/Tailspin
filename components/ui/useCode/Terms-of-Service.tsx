import { Checkbox } from "@/components/ui/checkbox";

export function TermsOfServiceBox() {
    return (
        <>
            <div className='flex flex-row'>
                <Checkbox className='mx-4' />
                <div>
                    By checking the box, you are confirming that you have read
                    and agree to&nbsp;
                    {/* TODO: Replace this to link to a seperate page for Terms and Services */}
                    <a href='google.com' className='text-blue-500 underline'>
                        Tailspin&apos;s terms &amp; conditions.
                    </a>
                </div>
            </div>
        </>
    );
}

export default TermsOfServiceBox;
