import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useStepperStore from "@/data-store/stepper-store";

export function EmailFormField(form: any) {
    const { email } = useStepperStore();

    function getPlaceHolder() {
        if (email !== "") {
            return email;
        } else {
            return "Insert email here";
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
                        <Input placeholder={getPlaceHolder()} {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}
