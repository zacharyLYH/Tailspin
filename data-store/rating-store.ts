import { create } from "zustand";

interface RatingStore {
    overallRating: number;
    setOverallRating: (value: number) => void;
    uxRating: number;
    setUxRating: (value: number) => void;
    funRating: number;
    setFunRating: (value: number) => void;
}

export const useRatingStore = create<RatingStore>((set) => ({
    overallRating: 0,
    setOverallRating: (value) => set({ overallRating: value }),
    uxRating: 0,
    setUxRating: (value) => set({ uxRating: value }),
    funRating: 0,
    setFunRating: (value) => set({ funRating: value }),
}));
