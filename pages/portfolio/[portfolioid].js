import { useRouter } from 'next/router'

function PortfolioIdPage() {
    const router = useRouter();

    console.log('helo router query', router.query);
    console.log('helo router pathname', router.pathname);

    // send a request to backend server
    // fetch data based on portfolio id with router.query.portfolioid

    return (
        <div>
            {`The Portfolio Id Page ${router.query.portfolioid}`}
        </div>
    )
}

export default PortfolioIdPage;