import {
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    progressIncrements,
    useStepperStore,
} from "@/data-store/stepper-store";
import Link from "next/link";

export function TOSFormField(form: any) {
    const { check, setCheck, progress, setProgress } = useStepperStore();

    if (check === true) {
        console.log("check is false");
    }

    return (
        <FormField
            control={form.control}
            name='accept'
            render={({ field }) => (
                <FormItem>
                    <FormControl>
                        <div className='flex'>
                            <Input
                                defaultChecked={check}
                                type='checkbox'
                                checked={field.value}
                                onChange={field.onChange}
                                onClick={() => {
                                    console.log(progressIncrements);
                                    setCheck(!check);
                                    setProgress(
                                        check
                                            ? progress - progressIncrements
                                            : progress + progressIncrements
                                    );
                                }}
                                className='peer mr-[10px] mt-[5px] h-4 w-[20px] cursor-pointer'
                            />
                            <label>
                                By checking the box, you are confirming that you
                                have read and agree to&nbsp;
                                {/* TODO: Replace this to link to a seperate page for Terms and Services */}
                                <Link
                                    aria-label='Terms of Service - link opens in a new tab'
                                    title='Terms of Service - link opens in a new tab'
                                    href='https://www.google.com'
                                    target='_blank'
                                    className='italic text-blue-500 underline'
                                >
                                    Tailspin&apos;s terms &amp; conditions.
                                    <img
                                        className='ml-1 inline-block'
                                        src='/newTab.webp'
                                    />
                                </Link>
                            </label>
                        </div>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}
