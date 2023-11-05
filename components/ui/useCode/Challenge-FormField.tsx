import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export function ChallengeFormField(form: any) {
    return (
        <FormField
            control={form.control}
            name='challenge'
            render={({ field }) => (
                <FormItem className='mb-[1px]'>
                    <FormLabel>Challenge/Level</FormLabel>
                    <FormControl>
                        <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                        >
                            <SelectTrigger className='w-[180px]'>
                                <SelectValue placeholder='Select a Challenge' />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value='helloWorld'>
                                    helloWorld
                                </SelectItem>
                                <SelectItem value='simpleDialog'>
                                    simpleDialog
                                </SelectItem>
                                <SelectItem value='simpleNavBar'>
                                    simpleNavBar
                                </SelectItem>
                                <SelectItem value='brightSunnyDay'>
                                    brightSunnyDay
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}
