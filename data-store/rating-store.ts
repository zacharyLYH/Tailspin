import { create } from "zustand";

interface RatingStore {
    overallRating: number;
    setOverallRating: (value: number) => void;
}

export const useRatingStore = create<RatingStore>((set) => ({
    overallRating: 0,
    setOverallRating: (value) => set({ overallRating: value }),
}));
