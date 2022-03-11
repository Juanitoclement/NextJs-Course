import Link from "next/link";

function ClientsPage() {
    const clients = [
        { id: 'max', name: 'Maximus'},
        { id: 'clement', name: 'Juanito Clement'}
    ];

    return (
        <div>
            <h1>The Clients Page</h1>
            <ul>
                {clients.map(client => (
                    <li key={client.id}>
                        <Link href={`/clients/${client.id}`}>{client.name}</Link>  
                        {/* <Link href={{
                            pathname: '/clients/[id]}',
                            query: { id: clients.id }
                        }}>
                            {client.name}
                        </Link> */}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ClientsPage;