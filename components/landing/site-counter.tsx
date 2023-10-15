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
        <article className='flex h-screen flex-col gap-4 md:flex-row'>
            <Box>Site Visitors: {siteCountValue[0]}</Box>
            <Box>
                How many people have submitted their code :{" "}
                {landingPageSubmitCount}
            </Box>
        </article>
    );
};

export default SiteCounter;
