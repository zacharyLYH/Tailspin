import {
    directDB_getSiteCount,
    directDB_getSubmitCount,
    directDB_incrementSiteCount,
} from "@/client-side-queries/direct-db-query/landing-page-queries";

const SiteCounter = async () => {
    const siteCountValue = await directDB_getSiteCount();
    await directDB_incrementSiteCount(siteCountValue[1]!, siteCountValue[0]!);
    const landingPageSubmitCount = await directDB_getSubmitCount();
    return (
        <article className='flex h-screen flex-col items-center justify-center text-center'>
            <p>Site counter: {siteCountValue[0]}</p>
            <p>Landingpage_submit_count: {landingPageSubmitCount}</p>
        </article>
    );
};

export default SiteCounter;
