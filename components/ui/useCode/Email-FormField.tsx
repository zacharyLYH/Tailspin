import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export function EmailFormField(form: any) {
    return (
        <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
                <FormItem className='mb-[1px]'>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                        <Input
                            placeholder='tailspin.official@gmail.com'
                            {...field}
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}
