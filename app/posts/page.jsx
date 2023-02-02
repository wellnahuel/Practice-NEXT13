//import { useEffect, useState } from 'react'
// creo una funcion fetchData

import { ListOfPosts } from "./ListOfPosts";

export default async function PostsPage() {
    return (
        <section>
            <ListOfPosts />
        </section>
    )
}

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

 return (
    <section>
        {posts.map(post => (
            <article key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </article>
        ))}
    </section>
 )
  */



//todos los archivos page.jsx dentro de cada una de las carpetas son rutas ESTATICAS, pero que pasa si le pegamos a un mock o API que nos trae distintos posts, fotos, sonidos, etc.

//Para las rutas dinamicas se debe crear una carpeta con el nombre del key dinamico, en este caso id , dentro de la carpeta de interes, en este caso posts. La carpeta lleva el nombre entre [], osea ' [id] ' , y dentro de ella un nuevo archivo page.jsx


