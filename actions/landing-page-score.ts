import useSessionStore from "@/data-store/session-store";
import { ConvertPromptStatic } from "@/lib/convert-prompt-static";
import { captureIframe } from "@/lib/static-screenshot";
import toast from "react-hot-toast";
import pixelmatch from "pixelmatch";
import LandingPageCode from "@/components/self/landing/test-challenges/code";

export const LandingPageScorer = async () => {
    try {
        captureIframe(false);
        ConvertPromptStatic("/button.png");
        // Wrap the asynchronous logic in an async function
        const compareImages = async (userImg: string, imgPrompt: string) => {
            if (userImg === "" || imgPrompt === "") return;

            const img1 = new Image();
            const img2 = new Image();
            img1.src = userImg;
            img2.src = imgPrompt;

            await Promise.all([
                new Promise<void>((resolve) => (img1.onload = () => resolve())),
                new Promise<void>((resolve) => (img2.onload = () => resolve())),
            ]);

            const canvas1 = document.createElement("canvas");
            const canvas2 = document.createElement("canvas");
            canvas1.width = img1.width;
            canvas1.height = img1.height;
            canvas2.width = img2.width;
            canvas2.height = img2.height;

            const ctx1 = canvas1.getContext("2d")!;
            const ctx2 = canvas2.getContext("2d")!;
            ctx1.drawImage(img1, 0, 0);
            ctx2.drawImage(img2, 0, 0);

            const imgData1 = ctx1.getImageData(0, 0, img1.width, img1.height);
            const imgData2 = ctx2.getImageData(0, 0, img2.width, img2.height);

            if (
                imgData1.width !== imgData2.width ||
                imgData1.height !== imgData2.height
            ) {
                console.error(
                    "Images must have the same dimensions for comparison."
                );
                return;
            }

            const diffPixels = new Uint8ClampedArray(imgData1.data.length);
            const numDiffPixels = pixelmatch(
                imgData1.data,
                imgData2.data,
                diffPixels,
                imgData1.width,
                imgData1.height,
                { threshold: 0.1 }
            );

            const totalPixels = imgData1.width * imgData1.height;
            const similarity =
                ((totalPixels - numDiffPixels) / totalPixels) * 100;
            toast.success(`${similarity}% likeness`);
        };

        let justReset = false;
        useSessionStore.subscribe(async (state) => {
            const { userImg, imgPrompt, reset, setCode } = state;
            if (justReset) {
                justReset = false;
                return;
            }
            if (!userImg || !imgPrompt) {
                return;
            }
            try {
                await compareImages(userImg, imgPrompt);
                justReset = true;
                reset();
                setCode(LandingPageCode());
            } catch (err) {
                console.error("An error occurred while comparing images:", err);
            }
        });
    } catch (error) {
        toast.error(`Something went wrong`);
    }
};
