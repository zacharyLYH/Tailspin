// import useSessionStore from "@/data-store/session-store";
// import html2canvas from "html2canvas";

// export const captureIframe = (capture: boolean) => {
//     const { setUserImg, userIframeSession } = useSessionStore.getState();
//     try {
//         const iframe = userIframeSession.current;
//         if (!iframe) return;
//         const iframeDocument =
//             iframe.contentDocument || iframe.contentWindow?.document;

//         if (!iframeDocument) {
//             return;
//         }

//         // Store the iframe's original dimensions
//         const originalWidth = iframe.style.width;
//         const originalHeight = iframe.style.height;

//         // Set the iframe dimensions to fullscreen size
//         const captureWidth = "1920px";
//         const captureHeight = "1080px";
//         iframe.style.width = captureWidth;
//         iframe.style.height = captureHeight;

//         // After adjusting the size, let's give it a moment to render correctly
//         setTimeout(() => {
//             // Capture the screenshot of the fullscreen-sized iframe
//             html2canvas(iframeDocument.body).then((canvas) => {
//                 // Restore the iframe to its original dimensions
//                 iframe.style.width = originalWidth;
//                 iframe.style.height = originalHeight;

//                 if (capture) {
//                     // Download the image
//                     const link = document.createElement("a");
//                     link.download = "screenshot.png";
//                     link.href = canvas.toDataURL();
//                     link.click();
//                 } else {
//                     setUserImg(canvas.toDataURL());
//                 }
//             });
//         }, 100); // A 100ms delay might suffice, but adjust as needed
//     } catch (error) {
//         console.log("An error occurred:", error);
//     }
// };
