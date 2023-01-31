import Link from 'next/link'
import  style  from './Navigation.module.css'


const links = [{
    label: 'Home',
    route: '/'
}, {
    label: 'About',
    route: '/about'
}]


export function Navigation() {
    return (
       <header className={style.header}>
         <ul className={style.navigation}>
            {links.map(({ label, route }) => (
               <li key={route}>
                  <Link href={route}>
                     {label}
                  </Link>
               </li>
            ))}
         </ul>
      </header>
    )
}