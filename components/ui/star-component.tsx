import React from "react";
import FullStar from "@/components/ui/star-svg/fullStar";
import EmptyStar from "@/components/ui/star-svg/emptyStar";

interface StarComponentProps {
    rating: number;
    setRating: (value: number) => void;
}

const StarComponent: React.FC<StarComponentProps> = ({ rating, setRating }) => {
    return (
        <div className='flex'>
            {Array.from({ length: 5 }).map((_, index) => (
                <div
                    key={index}
                    onClick={() => setRating(index + 1)}
                    className='cursor-pointer'
                >
                    {index < rating ? <FullStar /> : <EmptyStar />}
                </div>
            ))}
        </div>
    );
};

export default StarComponent;
