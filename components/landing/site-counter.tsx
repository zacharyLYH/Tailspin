import {
    directDB_getSiteCount,
    directDB_incrementSiteCount,
} from "@/client-side-queries/direct-db-query/landing-page-queries";
import { Box } from "../ui/stat-box";
import { getCodeSubmitCount } from "@/rq-queries/code-submit";

const SiteCounter = async () => {
    const siteCountValue = await directDB_getSiteCount();
    await directDB_incrementSiteCount(siteCountValue[1]!, siteCountValue[0]!);
    const landingPageSubmitCount = getCodeSubmitCount();

    return (
        <article className='flex  h-screen flex-col items-center gap-4 md:flex-row'>
            <Box>Site Visitors: {siteCountValue[0]}</Box>
            <Box>
                How many people have submitted their code :{" "}
                {landingPageSubmitCount}
            </Box>
        </article>
    );
};

export default SiteCounter;
