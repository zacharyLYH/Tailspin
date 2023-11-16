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
import { challengeMap } from "@/data-store/challenge-store";

export function ChallengeFormField(form: any) {
    return (
        <FormField
            control={form.control}
            name='challenge'
            render={({ field }) => (
                <FormItem className='mb-[1px]'>
                    <FormLabel>Challenge/Level</FormLabel>
                    <FormControl>
                        <div className='flex'>
                            <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                            >
                                <SelectTrigger className='w-[180px]'>
                                    <SelectValue placeholder='Select a Challenge' />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem
                                        key='default'
                                        value='Select a Challenge'
                                    >
                                        Select a Challenge
                                    </SelectItem>
                                    {challengeMap.map((item) => (
                                        <SelectItem
                                            key={item.key}
                                            value={item.key}
                                        >
                                            {item.value}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}
