import {useCallback, useContext, useEffect, useState} from 'react'
import { AuthContext } from '../context/AuthContext'
import LinksList from '../components/LinksList'
import Loader from '../components/Loader'
import {useHttp} from '../hooks/useHttp' 



export default function Links(){
    const [links, setLinks] = useState([])
    const { loading, request } = useHttp()
    const {token} = useContext(AuthContext)

    const fetchLinks = useCallback(async () =>{
        if( token){
        try {
            const fetched = await request('http://localhost:5000/api/link', 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setLinks(fetched)
        } catch (e) {}
    }
    }, [token, request])

    useEffect(()=>{
        fetchLinks()
    }, [fetchLinks])
   
    if(loading){
        return <Loader />
      }

    return (
        <>
        {!loading && (
        <div className="container">
            <LinksList links = {links} />
        </div>
        )}
        </>
    )
}