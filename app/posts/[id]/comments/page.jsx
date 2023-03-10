import Image from 'next/image'
import Link from 'next/link'

const fetchComments = async (id) => { //vamos a emular que el fetch tarda bastante para meter un loadin
    await new Promise(resolve => setTimeout(resolve, 3000))
    /* throw new Error ('Error al cargar los comentarios') */
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
        next: {
            revalidate: 60
        }
    })
        .then(res => res.json())
}

export default async function PostsPage({ params }) {
    const { id } = params;
    const comments = await fetchComments(id)
    return (
        <ul style={{ background: '#444', fontSize: '11px' }}>
            {comments.map((comment) => (
                <li key={comment.id}>
                    <Image alt={comment.name} src={`https://avatars.dicebear.com/api/pixel-art-neutral/${comment.email}.svg`
                    } width='50' height='50'></Image>
                    <h4>{comment.name}</h4>
                    <small>{comment.body}</small>
                </li>
            ))}
        </ul>
    )
}
