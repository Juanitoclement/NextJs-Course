import { useRouter } from "next/router";

function BlogPostsPage(){
    const router  = useRouter();

    console.log('helo router', router.query)

    return (
        <div>
            The Blog Posts Page
        </div>
    )
}

export default BlogPostsPage;