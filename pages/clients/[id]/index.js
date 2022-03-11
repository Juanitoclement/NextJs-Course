import { useRouter } from "next/router";

function ClientProjectsPage() {
    const router = useRouter();

    function loadProjectHandler() {
        router.push('/clients/max/projectA')
        // router.push({
        //     pathname: '/clients/[id]/[clientprojectid]',
        //     query: { id: 'max', clientprojectid: 'projectA'}
        // })
    }

    return (
        <div>
            <h1>The Project of a given client</h1>
            <button onClick={loadProjectHandler}>Load Project A</button>
        </div>
    )
}

export default ClientProjectsPage;