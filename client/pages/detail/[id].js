import { useRouter } from 'next/router'
import { useCallback, useContext, useEffect, useState } from 'react'
import Loader from '../../components/Loader'
import LinkCard from '../../components/LinkCard'
import { AuthContext } from '../../context/AuthContext'
import {useHttp} from '../../hooks/useHttp' 



function Link() {
    const { token } = useContext(AuthContext)
    const { request, loading } = useHttp()
    const [ link, setLink ] = useState(null)
    const router = useRouter()
    const linkId = router.query.id

    const getLink = useCallback(async () => {
      if (token && linkId){
      try{
        const fetched = await request(`http://localhost:5000/api/link/${linkId}`, 'GET', null, {
          Authorization: `Bearer ${token}`
        })

        setLink(fetched)
      } catch(e){}
    }
    }, [token, linkId, request])

    useEffect(() => {
      getLink()
    }, [getLink])

    if(loading){
      return <Loader />
    }

    return <>
     { !loading && !!link && (<LinkCard link={link} />)}
     </>
  }
  
/* Link.getInitialProps = async (ctx) => {
      const res = await fetch(`http://localhost:5000/api/link/${ctx.query.id}`,{ method: 'GET', headers: {
          Authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MjU1NjEwODJjZjM5OTk4ZTU0N2Y5NzciLCJpYXQiOjE2NDk4NTQyMTMsImV4cCI6MTY0OTg1NzgxM30.zvqkKAKWfBQkqFxU0DzyBlBaPnmBg1qVF2LgagkKI-8"
      }})
      const json = await res.json()
      console.log(json);
      return { link: json }
    }
   */
  export default Link