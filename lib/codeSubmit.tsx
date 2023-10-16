import {
    directDB_incrementSubmitCount,
    directDB_getSubmitCount
} from "@/client-side-queries/direct-db-query/landing-page-queries";

export const useSubmitCode = () => {

    const useSubmitIncrement = async () => {
        const siteSubmitValue = await directDB_getSubmitCount();
        await directDB_incrementSubmitCount(siteSubmitValue[1]!, siteSubmitValue[0]!);
    };

    return { useSubmitIncrement };
};


