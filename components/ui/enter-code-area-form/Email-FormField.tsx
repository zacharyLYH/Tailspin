import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useStepperStore } from "@/data-store/stepper-store";

export function EmailFormField(form: any) {
    const { email } = useStepperStore();

    return (
        <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                        <Input
                            placeholder='email@email.com'
                            defaultValue={email}
                            {...field}
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}
