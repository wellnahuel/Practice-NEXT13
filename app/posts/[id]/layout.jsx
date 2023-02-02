import React from 'react';
import Link from 'next/link'

const fetchSinglePost = ( id ) => {

    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: {
            revalidate: 60
        }
    })
        .then(res => res.json())
}

export default async function PostsPage({ children, params }) {
    /* ASI LO HARIAMOS CON REACT NORMALMENTE
    const [posts, setPosts] = useState([])
    const { id } = params    
    useEffect(() => {
        fetch('https://URL')
            .then(res => res.json())
            .then(data => {
                setPosts(data)
            })
    })
     */
    const { id } = params;
    const post = await fetchSinglePost(id)
    return (
        <article>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <Link href={`/posts/${id}/comments`}>Ver comentarios</Link>
            {children}
        </article>
    )
}
