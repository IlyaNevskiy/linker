import Link from 'next/link'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useRouter } from 'next/router'

export const Navbar = () =>{
    const auth = useContext(AuthContext)
    const router = useRouter()


    const logoutHandler = (e) => {
        e.preventDefault()
        auth.logout()
        router.push('/')
    }

    return (
        <nav>
        <div class="nav-wrapper blue darken-1" style={{padding: '0 2rem'}}>
          <a href="#" class="brand-logo">Cокращение ссылок</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><Link href="/create"><a>Создать</a></Link></li>
            <li><Link href="/links"><a>Список ссылок</a></Link></li>
            <li><a onClick={logoutHandler}>Выйти</a></li>
          </ul>
        </div>
      </nav>
    )
}