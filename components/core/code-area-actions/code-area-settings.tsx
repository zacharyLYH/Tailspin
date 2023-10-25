"use client";

import { Button } from "@/components/ui/button";
import useCodeAreaStore from "@/data-store/code-area-store";
import { Switch } from "@/components/ui/switch";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const ToggleDarkTheme = () => {
    const { mosaicThemeDark, setMosaicThemeDark } = useCodeAreaStore();
    return (
        <Switch
            checked={mosaicThemeDark}
            onCheckedChange={() => setMosaicThemeDark()}
        />
    );
};

const SetFontSize = () => {
    const { fontSize, setFontSize } = useCodeAreaStore();
    const fontSizeChoices: number[] = Array.from(
        { length: 11 },
        (_, i) => i + 10
    );
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='outline'>
                    <ChevronDown className='mr-1 h-4 w-4' />
                    {fontSize}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56 overflow-y-visible'>
                <DropdownMenuLabel>Theme</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {fontSizeChoices.map((size) => (
                    <DropdownMenuCheckboxItem
                        checked={size === fontSize}
                        onCheckedChange={() => setFontSize(size)}
                        key={size}
                    >
                        {size}
                    </DropdownMenuCheckboxItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

const AceEditorTheme = () => {
    const { aceEditorTheme, setAceEditorTheme } = useCodeAreaStore();
    const themeList: string[] = [
        "monokai",
        "github dark",
        "tomorrow night",
        "kuroir",
        "twilight",
        "xcode",
        "textmate",
        "solarized dark",
        "solarized light",
        "terminal",
    ];
    const displayValue = (themeName: string) => {
        return themeName.charAt(0).toUpperCase() + themeName.slice(1);
    };
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='outline'>
                    <ChevronDown className='mr-1 h-4 w-4' />
                    {displayValue(aceEditorTheme.replace("_", " "))}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56 overflow-y-visible'>
                <DropdownMenuLabel>Font Size</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {themeList.map((theme) => (
                    <DropdownMenuCheckboxItem
                        checked={theme === aceEditorTheme}
                        onCheckedChange={() =>
                            setAceEditorTheme(theme.replace(/ /g, "_"))
                        }
                        key={theme}
                    >
                        {displayValue(theme)}
                    </DropdownMenuCheckboxItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

const settingsOptions = new Map<string, () => React.ReactNode>([
    ["Dark Theme", () => <ToggleDarkTheme />],
    ["Editor Theme", () => <AceEditorTheme />],
    ["Font Size", () => <SetFontSize />],
]);

/*
This page is embedded into the Actions sheet. On the sheet, users will click into this button and pop out a dialog. In other words, these settings are not laid out in the sheet itself.

The style of this file is to include all the code for all settings in this file, as functions. Then, include it into settingsOptions map as a KV pair of label to the function in question. 

New settings options shouldn't touch the following component. Devs should create a new UI component for their setting and code it into the settingsOption map. 
*/
const SettingsPage = () => {
    return (
        <Dialog>
            <DialogTrigger>
                <Button className='min-w-full bg-purple-500 text-white'>
                    Settings
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Settings</DialogTitle>
                    <DialogDescription>
                        One stop shop to customize everything
                    </DialogDescription>
                </DialogHeader>
                <ScrollArea className='h-full w-full rounded-md border'>
                    {Array.from(settingsOptions.entries()).map(
                        ([label, reactNode]) => (
                            <div
                                className='flex justify-between p-4'
                                key={label}
                            >
                                <p>{label}</p>
                                {reactNode()}
                            </div>
                        )
                    )}
                </ScrollArea>
            </DialogContent>
        </Dialog>
    );
};

export default SettingsPage;
