
const QnAcard = ({title, content, link}) => {
    return (
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{content}</p>
            <a href={link} 
                className="inline-flex mt-4 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                target="_blank" 
                rel="noreferrer"
                >
                Know More
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    ); 
}

const InfoCard = ({title, content}) => {
    return (
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
           
            <a href="#">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{content}</p>
           
        </div>

    ); 
}

const QnA = () => {
    return (
        <div className="w-full px-10 h-2/4 text-white pb-10">
            <h1 className='flex items-start text-4xl mb-5'>Most Asked Q&A</h1>
            <div className="flex justify-evenly">
                <QnAcard title={"What is an NFT?"} link={"https://opensea.io/learn/nft/what-are-nfts"}></QnAcard>
                <QnAcard title={"Where can I sell my NFT?"}></QnAcard>
                <QnAcard title={"What is Minting?"} link={"https://opensea.io/learn/nft/what-is-minting-nft"}></QnAcard>
                <InfoCard title={"Can we use other wallet instead of Metamask?"} content={"Unfortunately no for now..."}></InfoCard>
            </div>

        </div>
    );
}

export default QnA;