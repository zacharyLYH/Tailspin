import {
    directDB_getSiteCount,
    directDB_incrementSiteCount,
} from "@/client-side-queries/direct-db-query/landing-page-queries";
import StatBox from "../stat-box";
import { User } from "lucide-react";

export const SiteVisitCountBox = async (props: any) => {
    const siteCountValue = await directDB_getSiteCount();
    await directDB_incrementSiteCount(siteCountValue[1]!, siteCountValue[0]!);
    return (
        <StatBox
            icon={<User className='h-6 w-6' />}
            content={`Site Visitors: ${siteCountValue[0]}`}
        />
    );
};
