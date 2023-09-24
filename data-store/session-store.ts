// SessionStore.ts
import { create } from "zustand";
import React from "react";

interface SessionStore {
    code: string;
    setCode: (newCode: string) => void;
    imgPrompt: string;
    setImgPrompt: (img: string) => void;
    userIframeSession: React.RefObject<HTMLIFrameElement>;
    promptIframeSession: React.RefObject<HTMLIFrameElement>;
    userImg: string;
    setUserImg: (img: string) => void;
    likenessScore: string;
    setLikenessScore: (score: string) => void;
    reset: () => void;
    loading: boolean;
    setLoading: (loading: boolean) => void;
}

const useSessionStore = create<SessionStore>((set) => ({
    imgPrompt: "",
    userImg: "",
    likenessScore: "0",
    setUserImg: (img: string) => set({ userImg: img }),
    userIframeSession: React.createRef<HTMLIFrameElement>(),
    promptIframeSession: React.createRef<HTMLIFrameElement>(),
    setImgPrompt: (img: string) => set({ imgPrompt: img }),
    reset: () =>
        set({ code: "", imgPrompt: "", userImg: "", likenessScore: "0" }),
    setLikenessScore: (score: string) => set({ likenessScore: score }),
    code: "",
    setCode: (newCode) => set({ code: newCode }),
    loading: false,
    setLoading: (loading: boolean) => set({ loading }),
}));

export default useSessionStore;
