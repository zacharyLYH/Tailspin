"use client";

import {
    directDB_getSiteCount,
    directDB_getSubmitCount,
    directDB_incrementSiteCount,
} from "@/client-side-queries/direct-db-query/landing-page-queries";

import { getSiteCount } from "@/rq-queries/site-count-queries";

import { Box } from "../ui/stat-box";

const SiteCounter = () => {
    const { isLoading, isError, isSuccess, data, error, refetch } =
        getSiteCount();

    if (isLoading) {
        console.log("isLoading: ", isLoading);
    }

    if (isError) {
        console.log("error is:", error);
    }

    if (isSuccess) {
        console.log("Succesful query!");
    }

    console.log("data is: ", data?.data.fieldVal);

    const siteCountValue = data?.data.fieldVal;
    //await directDB_incrementSiteCount(siteCountValue[1]!, siteCountValue[0]!);
    //const landingPageSubmitCount = await directDB_getSubmitCount();

    return (
        <article className='flex  h-screen flex-col items-center gap-4 md:flex-row'>
            <Box>Site Visitors: {siteCountValue}</Box>
            {/* <Box>
                How many people have submitted their code :{" "}
                {landingPageSubmitCount}
            </Box> */}
        </article>
    );
};

export default SiteCounter;
