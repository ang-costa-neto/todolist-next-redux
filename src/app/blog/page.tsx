import { IPost } from "@/interfaces/IPost";

export default async function Blog() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/posts`);
    const posts: IPost[] = await res.json();

    return (
        <div>
            <h1>Blog Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <a href={`/blog/${post.id}`}>{post.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
