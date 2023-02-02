import Link from 'next/link'

const fetchComments = async (id) => { //vamos a emular que el fetch tarda bastante para meter un loadin
    await new Promise(resolve =>setTimeout(resolve, 3000))
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
        <ul style={{ background: '#444', fontSize: '11px'}}>
            {comments.map((comment) => (
                <li key={comment.id}>
                    <h4>{comment.name}</h4>
                    <small>{comment.body}</small>
                </li> 
            ))}          
        </ul>
    )
}
