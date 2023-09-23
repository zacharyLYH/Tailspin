import { UserCircle2 } from "lucide-react";

interface BrowserMockupProps {
    children: React.ReactNode;
}

export const BrowserMockup: React.FC<BrowserMockupProps> = ({ children }) => {
    return (
        <div className="flex flex-col h-full rounded-lg bg-white">
            <div className="flex items-center justify-between bg-gray-300 rounded-t-lg px-4 py-2">
                <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex text-center justify-center bg-white px-3 py-1.5 rounded-full text-gray-400 text-muted-foreground">
                    <span>https://tailspin.com</span>
                </div>
                <UserCircle2 className="h-7 w-7" />
            </div>
            {children}
        </div>
    );
};
