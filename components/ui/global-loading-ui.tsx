import { TailspinLogo } from "@/components/ui/spinning-logo";

export default function GlobalLoadingUI() {
    return (
        <div className='flex h-screen items-center justify-center bg-white opacity-30'>
            <div className='z-10'>
                <TailspinLogo outershellClassname='w-20 h-20 animate-spin' />
                <span className='font-bold text-black'>Loading...</span>
            </div>
        </div>
    );
}
