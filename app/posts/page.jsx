export default function PostsPage() {
    return (
        <h1>
            Aqui mostramos los posts
        </h1>
    )
}

//todos los archivos page.jsx dentro de cada una de las carpetas son rutas ESTATICAS, pero que pasa si le pegamos a un mock o API que nos trae distintos posts, fotos, sonidos, etc.

//Para las rutas dinamicas se debe crear una carpeta con el nombre del key dinamico, en este caso id , dentro de la carpeta de interes, en este caso posts. La carpeta lleva el nombre entre [], osea ' [id] ' , y dentro de ella un nuevo archivo page.jsx