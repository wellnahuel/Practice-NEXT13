import '../styles/globals.css'
//import { Space_Grotesk } from '@next/font/google'
import { Navigation } from "../components/Navigation"

/* const font = Space_Grotesk ({
  weight: ['400', '700']
}) */

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Mi First Next 13 App</title>
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}


//children tiene lo que se renderiza hacia abajo de nuestras rutas
//layout es la pagina que envuelve cada ruta
