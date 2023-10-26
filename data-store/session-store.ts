import { create } from "zustand";
import React from "react";

interface SessionStore {
    code: string;
    setCode: (newCode: string) => void;
    userIframeSession: React.RefObject<HTMLIFrameElement>;
    promptIframeSession: React.RefObject<HTMLIFrameElement>;
    likenessScore: string;
    setLikenessScore: (score: string) => void;
    reset: () => void;
    loading: boolean;
    setLoading: (loading: boolean) => void;
}

const useSessionStore = create<SessionStore>((set) => ({
    likenessScore: "0",
    userIframeSession: React.createRef<HTMLIFrameElement>(),
    promptIframeSession: React.createRef<HTMLIFrameElement>(),
    reset: () => set({ code: "", likenessScore: "0" }),
    setLikenessScore: (score: string) => set({ likenessScore: score }),
    code: "",
    setCode: (newCode) => set({ code: newCode }),
    loading: false,
    setLoading: (loading: boolean) => set({ loading }),
}));

export default useSessionStore;
