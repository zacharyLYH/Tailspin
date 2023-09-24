import useSessionStore from "@/data-store/session-store";
import { ConvertPromptStatic } from "@/lib/convert-prompt-static";
import { captureIframe } from "@/lib/static-screenshot";
import toast from "react-hot-toast";
import LandingPageCode from "@/components/landing/test-challenges/placeholder-code";
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

        const resizeImageToMatchReference = (
            base64Reference: string,
            base64Target: string
        ): Promise<string> => {
            return new Promise((resolve) => {
                const referenceImage = new Image();
                referenceImage.onload = function () {
                    const referenceWidth = referenceImage.width;
                    const referenceHeight = referenceImage.height;

                    const targetImage = new Image();
                    targetImage.onload = function () {
                        const targetAspectRatio =
                            targetImage.width / targetImage.height;
                        let newWidth, newHeight;

                        if (targetImage.width > targetImage.height) {
                            // Landscape mode
                            newWidth = referenceWidth;
                            newHeight = newWidth / targetAspectRatio;
                        } else {
                            // Portrait mode or square
                            newHeight = referenceHeight;
                            newWidth = newHeight * targetAspectRatio;
                        }

                        const canvas = document.createElement("canvas");
                        canvas.width = referenceWidth;
                        canvas.height = referenceHeight;
                        const ctx = canvas.getContext("2d")!;
                        ctx.fillStyle = "#FFFFFF"; // White background
                        ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill the canvas with white
                        ctx.drawImage(
                            targetImage,
                            (referenceWidth - newWidth) / 2,
                            (referenceHeight - newHeight) / 2,
                            newWidth,
                            newHeight
                        );

                        resolve(canvas.toDataURL()); // Return the base64 of the resized image
                    };
                    targetImage.src = base64Target;
                };
                referenceImage.src = base64Reference;
            });
        };

        const compareImages = async (image1: string, image2: string) => {
            const resizedImg1 = await resizeImageToMatchReference(
                image2,
                image1
            );

            const imgData1 = await base64ToImageData(resizedImg1);
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
