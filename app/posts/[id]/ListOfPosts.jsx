import { LikeButton } from "./LikeButton";

async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json()
}

export async function ListOfPosts() {
    const posts = await getData();

    return posts.slice(0,5).map(post => (
        <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <LikeButton id={post.id} />
        </article>
    ))
}