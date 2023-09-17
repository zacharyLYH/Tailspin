import useSessionStore from "@/data-store/session-store";

export const ConvertPromptStatic = async (imgURL: string) => {
    const { setImgPrompt } = useSessionStore.getState();
    // Fetch image from public folder
    const response = await fetch(imgURL);
    const blob = await response.blob();
    // Convert blob to Base64
    const reader = new FileReader();
    reader.onloadend = () => {
        if (typeof reader.result === "string") {
            const base64data = reader.result.split(",")[1]; // Remove any existing MIME type
            const pngBase64 = `data:image/png;base64,${base64data}`;
            setImgPrompt(pngBase64);
        } else {
            console.error("Could not convert blob to base64 string");
        }
    };
    reader.onerror = () => {
        console.error("An error occurred while reading the blob");
    };
    reader.readAsDataURL(blob);
};
