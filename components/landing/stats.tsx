import { CodeSubmitCountBox } from "../ui/statistics/code-submit-count-box";
import { SiteRatingStatBox } from "../ui/statistics/site-rating";
import { SiteVisitCountBox } from "../ui/statistics/site-visit-count-box";

const SiteCounter = async () => {
    return (
        <div className='mx-12 flex min-h-[60vh] flex-col items-center justify-center'>
            <h1 className='mb-5 text-center text-3xl font-bold italic'>
                Some Statistics
            </h1>
            <article className=' grid gap-6 rounded border border-pink-300  p-5 md:grid-cols-2'>
                <SiteVisitCountBox />
                <CodeSubmitCountBox />
                <SiteRatingStatBox />
            </article>
        </div>
    );
};

export default SiteCounter;
