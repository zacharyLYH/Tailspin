import { UserCircle2 } from "lucide-react";

interface BrowserMockupProps {
    children: React.ReactNode;
}

export const BrowserMockup: React.FC<BrowserMockupProps> = ({ children }) => {
    return (
        <div className='flex h-full flex-col rounded-lg bg-white'>
            <div className='flex items-center justify-between rounded-t-lg bg-gray-300 px-4 py-2'>
                <div className='flex space-x-2'>
                    <div className='h-3 w-3 rounded-full bg-red-500'></div>
                    <div className='h-3 w-3 rounded-full bg-yellow-500'></div>
                    <div className='h-3 w-3 rounded-full bg-green-500'></div>
                </div>
                <div className='flex justify-center rounded-full bg-white px-3 py-1.5 text-center text-gray-400 text-muted-foreground'>
                    <span>https://tailspin.com</span>
                </div>
                <UserCircle2 className='h-7 w-7' />
            </div>
            {children}
        </div>
    );
};
