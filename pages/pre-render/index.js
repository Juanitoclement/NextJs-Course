import path from 'path'
import fs from 'fs';

function PreRender(props){
    const { products } = props

    return (
        <ul>
            {products.map((res, i) => {
                return (
                    <li key={i}>{res.title}</li>
                )
            })}
        </ul>
    )
}

// Pre render the this code first to prepare the props and not being visible on the client side
export async function getStaticProps() {
    // const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json')
    // const jsonData = await fs.readFile(filePath)
    // const data = JSON.parse(jsonData)
    fs

    return {
        props: {
            products: [{id: 'p1', title: 'product 1'}]
        }
    }
}

export default PreRender;
