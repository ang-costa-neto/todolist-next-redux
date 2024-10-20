import { IPost } from '@/interfaces/IPost';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<IPost | { message: string }>
) {
    const { id } = req.query;

    const posts: IPost[] = [
        { id: 1, title: 'Post 1', body: 'Conteúdo do post 1' },
        { id: 2, title: 'Post 2', body: 'Conteúdo do post 2' },
        { id: 3, title: 'Post 3', body: 'Conteúdo do post 3' },
    ];

    const post = posts.find((p) => p.id === Number(id));

    if (post) {
        res.status(200).json(post);
    }

    res.status(404).json({ message: 'Post não encontrado' });
}
