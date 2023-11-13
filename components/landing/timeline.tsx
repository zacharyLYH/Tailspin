const TimelineSVGIcon = () => {
    return (
        <span className='absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900'>
            <svg
                className='h-2.5 w-2.5 text-blue-800 dark:text-blue-300'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 20 20'
            >
                <path d='M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z' />
            </svg>
        </span>
    );
};

const Timeline = () => {
    return (
        <div className='mx-12 flex min-h-[60vh] flex-col items-center justify-center '>
            <p className='mb-5 text-center text-3xl font-bold italic'>
                Timeline
            </p>
            <div className='rounded border border-pink-200 p-5'>
                <ol className='relative mx-4 border-l border-gray-200 dark:border-gray-400 md:mx-8 lg:mx-16'>
                    <li className='mb-10 ml-6'>
                        <TimelineSVGIcon />
                        <h3 className='mb-1 flex items-center text-lg font-semibold text-gray-900 dark:text-white'>
                            V0
                            <span className='ml-3 mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300'>
                                Current
                            </span>
                        </h3>
                        <time className='mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
                            In Active Development
                        </time>
                        <p className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400'>
                            Building out this landing page. Polishing the
                            interactive playground. Adding nice UI/UX.
                        </p>
                    </li>
                    <li className='ml-6'>
                        <TimelineSVGIcon />
                        <h3 className='mb-1 text-lg font-semibold text-gray-900 dark:text-white'>
                            V1.0
                        </h3>
                        <time className='mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
                            Latest 1st November 2023
                        </time>
                        <p className='text-base font-normal text-gray-500 dark:text-gray-400'>
                            Innovate and make incremental improvements to the
                            core business of Tailspin - the coding page.
                            Iteratively add, optimize, and beautify features to
                            the coding page.
                        </p>
                    </li>
                    <li className='ml-6'>
                        <TimelineSVGIcon />
                        <h3 className='mb-1 text-lg font-semibold text-gray-900 dark:text-white'>
                            V1.1
                        </h3>
                        <time className='mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
                            TBD...
                        </time>
                        <p className='text-base font-normal text-gray-500 dark:text-gray-400'>
                            Implement user profiles to keep track of their
                            progress. Provide intelligent dashboards to help
                            users analyze their performance in an empirical and
                            systematic manner. Provide a fully customizable
                            public profile page that optimizes showing off
                            user&apos;s achievements and accomplishments.
                        </p>
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default Timeline;
