import {
    directDB_getSiteCount,
    directDB_getSubmitCount,
    directDB_incrementSiteCount,
} from "@/client-side-queries/direct-db-query/landing-page-queries";
import { Box } from "../ui/stat-box";

const SiteCounter = async () => {
    const siteCountValue = await directDB_getSiteCount();
    await directDB_incrementSiteCount(siteCountValue[1]!, siteCountValue[0]!);
    const landingPageSubmitCount = await directDB_getSubmitCount();

    return (
        <article className='grid h-screen gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <Box>Site counter: {siteCountValue[0]}</Box>
            <Box>Landingpage_submit_count: {landingPageSubmitCount}</Box>
            <Box>Fake Statistic: 1</Box>
            <Box>Fake Statistic: 1</Box>
            <Box>Fake Statistic: 1</Box>
            <Box>Fake Statistic: 1</Box>
            <Box>Fake Statistic: 1</Box>
        </article>
    );
};

export default SiteCounter;
