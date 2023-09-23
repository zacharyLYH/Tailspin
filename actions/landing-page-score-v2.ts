import useSessionStore from "@/data-store/session-store";
import { ConvertPromptStatic } from "@/lib/convert-prompt-static";
import { captureIframe } from "@/lib/static-screenshot";
import toast from "react-hot-toast";
import LandingPageCode from "@/components/self/landing/test-challenges/code";
import { compare } from "image-ssim";

export const LandingPageScorerV2 = async () => {
    let unsubscribe: Function | null = null;
    const sessionStore = useSessionStore.getState();
    sessionStore.setLoading(true);
    try {
        captureIframe(false);
        ConvertPromptStatic("/button.png");
        let justReset = false;

        interface State {
            userImg: string;
            imgPrompt: string;
            reset: () => void;
            setCode: (code: string) => void;
        }

        type IImage = {
            data: Uint8Array;
            width: number;
            height: number;
            channels: number;
        };

        const base64ToImageData = async (
            base64Image: string
        ): Promise<IImage> => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.onload = () => {
                    const canvas = document.createElement("canvas");
                    canvas.width = img.width;
                    canvas.height = img.height;
                    const ctx = canvas.getContext("2d")!;
                    ctx.drawImage(img, 0, 0);
                    const imageData = ctx.getImageData(
                        0,
                        0,
                        img.width,
                        img.height
                    );
                    const data = new Uint8Array(imageData.data.buffer); // Direct conversion
                    resolve({
                        data: data,
                        width: img.width,
                        height: img.height,
                        channels: 4,
                    });
                };
                img.onerror = reject;
                img.src = base64Image;
            });
        };

        const compareImages = async (image1: string, image2: string) => {
            const imgData1 = await base64ToImageData(image1);
            const imgData2 = await base64ToImageData(image2);
            const ssimResult = compare(imgData1, imgData2);
            toast.success(`SSIM Score: ${ssimResult.ssim}`);
        };

        unsubscribe = useSessionStore.subscribe(async (state: State) => {
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
            } finally {
                if (unsubscribe) {
                    unsubscribe();
                }
                sessionStore.setLoading(false);
            }
        });
    } catch (error) {
        toast.error(`Something went wrong`);
        sessionStore.setLoading(false);
    }
};
