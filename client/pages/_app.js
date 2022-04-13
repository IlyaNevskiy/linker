import 'materialize-css/dist/css/materialize.min.css'
import "../styles/index.css"
// import 'materialize-css'
import { useAuth } from '../hooks/useAuth'
import { AuthContext } from '../context/AuthContext'
import { Navbar } from '../components/Navbar'
/* import { useEffect } from 'react'
import { useRouter } from 'next/router' */

function MyApp({ Component, pageProps }) {
  const { token, login, logout, userId } = useAuth()
  const isAuthenticated = !!token
/*   const router = useRouter()
 */
/*   useEffect(() => {
    if(isAuthenticated){
        router.push('/')
    }
}, [token]) */
    return ( 
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated
    }}>  
      { isAuthenticated && <Navbar /> }
      <Component {...pageProps} />
    </AuthContext.Provider>
    )
  }
  
  export default MyApp