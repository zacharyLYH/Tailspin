"use client";

import StarComponent from "@/components/ui/star-component";
import { useRatingStore } from "@/data-store/rating-store";

const FunRating = () => {
    const rating = useRatingStore((state) => state.funRating);
    const setRating = useRatingStore((state) => state.setFunRating);
    return (
        <div>
            <h1 className='mb-2 text-xl'>Did you enjoy the coding:</h1>
            <StarComponent rating={rating} setRating={setRating} />
            <div className='mt-2 flex flex-row'>
                <span>{rating}/5</span>
                <button
                    className=' text-md ml-3 underline '
                    onClick={() => setRating(0)}
                >
                    Worse than Notepad
                </button>
            </div>
        </div>
    );
};

export default FunRating;
