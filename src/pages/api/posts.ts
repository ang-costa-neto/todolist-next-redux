
interface Post {
    id: number;
    title: string;
    body: string;
}

// Função handler da API
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
    _: NextApiRequest,
    res: NextApiResponse<Post[]>
) {
    const posts: Post[] = [
        { id: 1, title: 'Post 1', body: 'Conteúdo do post 1' },
        { id: 2, title: 'Post 2', body: 'Conteúdo do post 2' },
        { id: 3, title: 'Post 3', body: 'Conteúdo do post 3' },
    ];

    // Retornando os posts com status 200
    res.status(200).json(posts);
}
