import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import { useHttp } from "../hooks/useHttp"
import { useRouter } from 'next/router'

export default function Create(){
    const [link, setLink] = useState('')
    const { request } = useHttp()
    const auth = useContext(AuthContext)
    const router = useRouter()

    const pressHandler = async event => {
        if (event.key === 'Enter'){
            try {
                console.log(`Bearer ${auth.token}`)
               const data = await request('http://localhost:5000/api/link/generate', 'POST', { from: link }, {
                    Authorization: `Bearer ${auth.token}`
               })
              await router.push(`/detail/${data.link._id}`)
            } catch(e) {}
        }
    }

    return <>
        <div className="container">
            <div className="row">
                <div className="col s8 offset-s2" style= {{paddingTop: '2rem'}}>
                    <div className="input-field">
                        <input 
                        placeholder="Введите ссылку" 
                        id="link" 
                        type="text" 
                        onChange={e => setLink(e.target.value)}
                        value={link} 
                        onKeyPress= {pressHandler}
                        />
                      </div>              
                
                </div>
            </div>
        </div>
    </>
}