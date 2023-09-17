import useSessionStore from "@/data-store/session-store";

export const ConvertPromptStatic = async (imgURL: string) => {
    const { setImgPrompt } = useSessionStore.getState();
    // Fetch image from public folder
    const response = await fetch(imgURL);
    const blob = await response.blob();

    // Convert blob to Base64
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
        const base64data = reader.result;
        setImgPrompt(base64data as string);
    };
};
