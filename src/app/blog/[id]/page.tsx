import { IPost } from "@/interfaces/IPost";

const BlogPost = async ({ params }: { params: { id: string } }) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/posts/${params.id}`);
    const post: IPost = await res.json();

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
};

export default BlogPost;