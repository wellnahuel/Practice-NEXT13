import Link from "next/link";
import { LikeButton } from "./LikeButton";

// con { cache: 'no-store' } lo que hago es decir que no lo guarde en el cache. indicamos que deje de ser estatico para ser serverside
/* con ... next: {
    revalidate: CANTIDAD DE SEGUNDOS
} 
lo que hago es indicar que cada CANTIDAD DE SEGUNDOS revalidaria , haria un nuevo fetch 
*/

//esto que esta dentro del link va si o si sino chilla : as={`/posts/${post.id}`
async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json()
}

export async function ListOfPosts() {
    const posts = await getData();

    return posts.slice(0, 5).map(post => (
        <article key={post.id}>
            <Link href='/posts/[id]' as={`/posts/${post.id}`}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <LikeButton id={post.id} />
            </Link>
        </article>
    ))
}