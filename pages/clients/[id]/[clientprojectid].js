import { useRouter } from "next/router";

function SelectedClientProjectPage() {
    const router  = useRouter();

    console.log('helo selected client router', router.query);

    return (
        <div>
            <h1>
                The Project Page for Specific Project for a Selected Clent
            </h1>
        </div>
    )
}

export default SelectedClientProjectPage;