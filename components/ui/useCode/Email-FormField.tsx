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

    function getDefaultValue() {
        if (email !== "") {
            return email;
        }
    }

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
                            defaultValue={getDefaultValue()}
                            {...field}
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}
