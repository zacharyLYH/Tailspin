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
import { Button } from "../button";

export function ChallengeFormField(form: any) {
    const handleClear = (field: any) => {
        console.log("call clear");
    };

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
                                    {field.value ? (
                                        <SelectValue placeholder='Select a Challenge' />
                                    ) : (
                                        "Select a Challenge"
                                    )}
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
                            <Button
                                type='button'
                                variant='outline'
                                className='inline-block italic'
                                onClick={() => handleClear(field)}
                            >
                                Clear
                            </Button>
                        </div>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}
