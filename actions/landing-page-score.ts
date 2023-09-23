import useSessionStore from "@/data-store/session-store";
import { ConvertPromptStatic } from "@/lib/convert-prompt-static";
import { captureIframe } from "@/lib/static-screenshot";
import toast from "react-hot-toast";
import LandingPageCode from "@/components/self/landing/test-challenges/code";

export const LandingPageScorer = async () => {
    let unsubscribe: Function | null = null; // to hold the unsubscribe function
    const sessionStore = useSessionStore.getState();
    try {
        captureIframe(false);
        ConvertPromptStatic("/button.png");
        let justReset = false;

        // Define the state shape for your Zustand store
        interface State {
            userImg: string;
            imgPrompt: string;
            reset: () => void;
            setCode: (code: string) => void;
        }

        // Function to draw an image onto a canvas and return the 2D context
        const getImageContext = (
            base64Image: string
        ): Promise<CanvasRenderingContext2D> => {
            return new Promise((resolve) => {
                const img = new Image();
                img.onload = () => {
                    const canvas = document.createElement("canvas");
                    canvas.width = img.width;
                    canvas.height = img.height;
                    const ctx = canvas.getContext("2d")!;
                    ctx.drawImage(img, 0, 0);
                    resolve(ctx);
                };
                img.src = base64Image;
            });
        };

        // Function to generate a color histogram from a canvas 2D context
        const getColorHistogram = (
            ctx: CanvasRenderingContext2D,
            width: number,
            height: number
        ): Record<string, number> => {
            const imgData = ctx.getImageData(0, 0, width, height).data;
            const histogram: Record<string, number> = {};

            for (let i = 0; i < imgData.length; i += 4) {
                const key = `${imgData[i]}-${imgData[i + 1]}-${imgData[i + 2]}`;
                histogram[key] = (histogram[key] || 0) + 1;
            }

            return histogram;
        };

        // Function to compare two histograms and return a similarity percentage
        const compareHistograms = (
            histogram1: Record<string, number>,
            histogram2: Record<string, number>
        ): number => {
            let similarity = 0;
            let totalPixels = 0;

            for (const color in histogram1) {
                totalPixels += histogram1[color];
                if (histogram2[color]) {
                    similarity += Math.min(
                        histogram1[color],
                        histogram2[color]
                    );
                }
            }

            return (similarity / totalPixels) * 100;
        };

        // Main function to compare two base64 images
        const compareImages = async (image1: string, image2: string) => {
            sessionStore.setLoading(true);
            const ctx1 = await getImageContext(image1);
            const ctx2 = await getImageContext(image2);

            const histogram1 = getColorHistogram(
                ctx1,
                ctx1.canvas.width,
                ctx1.canvas.height
            );
            const histogram2 = getColorHistogram(
                ctx2,
                ctx2.canvas.width,
                ctx2.canvas.height
            );

            const similarity = compareHistograms(histogram1, histogram2);
            toast.success(`${similarity}% likeness`);

            sessionStore.setLoading(false);
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
                setCode(LandingPageCode()); // Replace this with your actual code logic
            } catch (err) {
                console.error("An error occurred while comparing images:", err);
            } finally {
                if (unsubscribe) {
                    unsubscribe();
                }
            }
        });
    } catch (error) {
        toast.error(`Something went wrong`);
        sessionStore.setLoading(false);
    }
};
