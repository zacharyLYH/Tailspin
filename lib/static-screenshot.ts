import html2canvas from "html2canvas";

export const captureIframe = (
    iframeRef: React.RefObject<HTMLIFrameElement>
) => {
    try {
        const iframe = iframeRef.current;
        if (!iframe) return;

        const iframeDocument =
            iframe.contentDocument || iframe.contentWindow?.document;

        if (iframeDocument) {
            html2canvas(iframeDocument.body).then((canvas) => {
                // Download the image
                const link = document.createElement("a");
                link.download = "screenshot.png";
                link.href = canvas.toDataURL();
                link.click();
            });
        }
    } catch (error) {
        console.log("An error occurred:", error);
    }
};
