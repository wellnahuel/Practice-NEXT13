export default function Home() {
    return (
    <h1>
        esta es nuestra pagina por ahora
    </h1>
    )
}

//EN NEXT13 LOS COMPONENTES DENTRO DE LA CARPETA APP SON POR DEFECTO SIEMPRE EJECUTADOS EN EL SERVIDOR
//SI NECESITAMOS COMPONENETES QUE TENGAN INTERACTIVIDAD, QUE TENGAS ESTADOS, QUE ACTUEN CON ALGUN HOOKS, ACCEDER A LA API DEL NAVEGADOR
//TODO ESTO NO SE PUEDE HACER POR DEFECTO EN UN COMPONENTE QUE NO SEA DE CLIENTE! 

//como convierto el componenete en unno de cliente¿ , vamos al archivo LikeButton , linea 1 , ponemos el string 'use client'


