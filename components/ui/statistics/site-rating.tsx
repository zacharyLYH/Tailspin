"use client";

import React from "react";
import { Box } from "../stat-box";
import { useGetRating } from "@/client-side-queries/rq-queries/rating-submit";
import { Skeleton } from "@/components/ui/skeleton";

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
                            <Box>
                                <div className='flex flex-col'>
                                    <p>
                                        {val.field_name} :{" "}
                                        {Number(val.field_value.split("-")[0]) /
                                            Number(
                                                val.field_value.split("-")[1]
                                            )}{" "}
                                        stars.
                                    </p>
                                    <p>
                                        {val.field_value.split("-")[1]} ratings.
                                    </p>
                                </div>
                            </Box>
                        </React.Fragment>
                    )
                )
            ) : (
                <SkeletonDemo />
            )}
        </>
    );
};
