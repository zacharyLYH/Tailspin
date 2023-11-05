import { CodeSubmitCountBox } from "../ui/statistics/code-submit-count-box";
import { SiteRatingStatBox } from "../ui/statistics/site-rating";
import { SiteVisitCountBox } from "../ui/statistics/site-visit-count-box";

const SiteCounter = async () => {
    return (
        <article className='flex  h-screen flex-col items-center gap-4 md:flex-row'>
            <SiteVisitCountBox />
            <CodeSubmitCountBox />
            <SiteRatingStatBox />
        </article>
    );
};

export default SiteCounter;
