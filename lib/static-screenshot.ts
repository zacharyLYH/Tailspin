import useSessionStore from "@/data-store/session-store";
import html2canvas from "html2canvas";

export const captureIframe = (capture: boolean) => {
    const { setUserImg, userIframeSession } = useSessionStore.getState(); // Assuming useImageStore returns a setLikenessScore function
    try {
        const iframe = userIframeSession.current;
        if (!iframe) return;
        const iframeDocument =
            iframe.contentDocument || iframe.contentWindow?.document;

        if (iframeDocument) {
            html2canvas(iframeDocument.body).then((canvas) => {
                if (capture) {
                    // Download the image
                    const link = document.createElement("a");
                    link.download = "screenshot.png";
                    link.href = canvas.toDataURL();
                    link.click();
                } else {
                    setUserImg(canvas.toDataURL());
                }
            });
        }
    } catch (error) {
        console.log("An error occurred:", error);
    }
};
