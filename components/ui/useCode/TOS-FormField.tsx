import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useStepperStore from "@/data-store/stepper-store";
import Link from "next/link";

let checked: boolean = false;

export function TOSFormField(form: any) {
    console.log("type is ", typeof form);
    const { check, setCheck } = useStepperStore();
    const { progress, setProgress } = useStepperStore();
    const PROGRESS_INCREMENT: number = 25;

    return (
        <FormField
            control={form.control}
            name='accept'
            render={({ field }) => (
                <FormItem>
                    <FormControl>
                        <div className='flex'>
                            <Input
                                type='checkbox'
                                checked={field.value}
                                onChange={field.onChange}
                                onClick={() => {
                                    checked = !checked;
                                    setCheck(checked);
                                    setProgress(
                                        checked
                                            ? progress + PROGRESS_INCREMENT
                                            : progress - PROGRESS_INCREMENT
                                    );
                                }}
                                className='peer mr-[10px] mt-[5px] h-4 w-[20px] cursor-pointer'
                            />
                            <label>
                                By checking the box, you are confirming that you
                                have read and agree to&nbsp;
                                {/* TODO: Replace this to link to a seperate page for Terms and Services */}
                                <Link
                                    href='https://www.google.com'
                                    className='italic text-blue-500 underline'
                                >
                                    Tailspin&apos;s terms &amp; conditions.
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
