"use client";

import React from "react";
import { useGetRating } from "@/client-side-queries/rq-queries/rating-submit";
import { Skeleton } from "@/components/ui/skeleton";
import StatBox from "../stat-box";
import { Star } from "lucide-react";

function SkeletonDemo() {
    return (
        <div className='flex items-center space-x-4'>
            <Skeleton className='h-12 w-12 rounded-full' />
            <div className='space-y-2'>
                <Skeleton className='h-4 w-[250px]' />
                <Skeleton className='h-4 w-[200px]' />
            </div>
        </div>
    );
}

const RatingStars = ({ score }: { score: string }) => {
    const rating = parseInt(score, 10);
    const stars = Array(rating).fill(null);
    return (
        <div className='flex space-x-1'>
            {stars.map((_, index) => (
                <Star key={index} className='h-4 w-4 text-yellow-400' /> // Replace with your Star icon component
            ))}
        </div>
    );
};

export const SiteRatingStatBox = () => {
    const value = useGetRating();

    return (
        <>
            {value ? (
                value.map(
                    (val: { field_name: string; field_value: string }) => (
                        <React.Fragment key={val.field_name}>
                            <StatBox
                                icon={
                                    <RatingStars
                                        score={(
                                            Number(
                                                val.field_value.split("-")[0]
                                            ) /
                                            Number(
                                                val.field_value.split("-")[1]
                                            )
                                        ).toFixed(2)}
                                    />
                                }
                                content={`${val.field_name
                                    .split("_")
                                    .join(" ")}: ${(
                                    Number(val.field_value.split("-")[0]) /
                                    Number(val.field_value.split("-")[1])
                                ).toFixed(2)} with ${
                                    val.field_value.split("-")[1]
                                } ratings`}
                            />
                        </React.Fragment>
                    )
                )
            ) : (
                <SkeletonDemo />
            )}
        </>
    );
};
