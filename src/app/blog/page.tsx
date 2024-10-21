"use client";
import { IPost } from "@/interfaces/IPost";
import { useRequireAuth } from '@/hooks/useRequireAuth';
import { useState, useEffect } from "react";

const Blog = () => {
    const isAuthenticated = useRequireAuth();
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        fetchPosts().then((data) => {
            setPosts(data);
        });
    }, []);
    
    const fetchPosts = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/posts`);
        const posts: IPost[] = await res.json();
        return posts;
    };

    if (!isAuthenticated) {
        return <p>Redirecionando para a página de login...</p>;
    }


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

export default Blog;