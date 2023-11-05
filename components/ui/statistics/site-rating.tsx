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

export const SiteRatingStatBox = (props: any) => {
    const value = useGetRating();
    return (
        <>
            {value ? (
                value.map(
                    (val: { field_name: string; field_value: string }) => (
                        <React.Fragment key={val.field_name}>
                            <StatBox
                                icon={<Star className='h-6 w-6' />}
                                content={`${val.field_name}:${(
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
