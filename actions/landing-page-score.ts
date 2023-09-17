import useSessionStore from "@/data-store/session-store";
import { ConvertPromptStatic } from "@/lib/convert-prompt-static";
import { captureIframe } from "@/lib/static-screenshot";
import toast from "react-hot-toast";

export const LandingPageScorer = async () => {
    const { userImg, imgPrompt, setLikenessScore } = useSessionStore.getState();
    try {
        captureIframe(false);
        ConvertPromptStatic("/button");
        const resp = await fetch("/api/score/static", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ img1: imgPrompt, img2: userImg }),
        });
        if (resp.status !== 200) {
            toast.error(`Error code in landing-page-score: ${resp.status} `);
        } else {
            toast.success(`Successfully scored!`);
            setLikenessScore("99%");
        }
    } catch (error) {
        toast.error(`Something went wrong`);
    }
};
