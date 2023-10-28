import { Box } from "../stat-box";
import {
    directDB_getSiteCount,
    directDB_incrementSiteCount,
} from "@/client-side-queries/direct-db-query/landing-page-queries";

export const SiteVisitCountBox = async (props: any) => {
    const siteCountValue = await directDB_getSiteCount();
    await directDB_incrementSiteCount(siteCountValue[1]!, siteCountValue[0]!);
    return <Box>Site Visitors: {siteCountValue[0]}</Box>;
};
