import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import { useHttp } from "../hooks/useHttp"
import { useMessage } from "../hooks/useMessage"
import { useRouter } from 'next/router'

export default function Auth(){
    const auth = useContext(AuthContext)
    const router = useRouter()
    const [form, setForm] = useState( { email: "", password: "" } )
    const { loading, request, error, clearError } = useHttp()
    const message = useMessage()

    useEffect(() => {
        if(auth.isAuthenticated){
            router.push('/create')
        }
    }, [auth.token])

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    const changeHandler = event =>{
        setForm({ ...form, [event.target.name] : event.target.value })
    }

    const registerHandler = async () =>{
        try{
            const data = await request( 'http://localhost:5000/api/auth/register', 'POST', {...form} )
            message(data.message)
        }catch(e) {}
    }

    const loginHandler = async () =>{
        try{
            const data = await request( 'http://localhost:5000/api/auth/login', 'POST', {...form} )
            auth.login(data.token, data.userId)
        }catch(e) {}
    }

    return <>
        <div className="row">
           <div className = "col s6 offset-s3">
                <h1>Сократи ссылку</h1>
                <div className="card blue darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Авторизация</span>
                        <div>
                            <div className="input-field">
                                <input 
                                    className="yellow-input"
                                    placeholder="Введите ваш email" 
                                    id="email" 
                                    type="text"
                                    name="email" 
                                    onChange={changeHandler} 
                                    value={form.email}
                                />
                            </div>
                            <div className="input-field">
                                <input 
                                    className="yellow-input"
                                    placeholder="Введите ваш пароль" 
                                    id="password" 
                                    type="password"
                                    name="password"
                                    onChange={changeHandler}
                                    value={form.password} 
                                />
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <button 
                        className="btn yellow darken-4" 
                        style={{ marginRight: 10 }}
                        onClick={loginHandler}
                        disabled={loading}
                        >
                            Войти
                        </button>
                        <button 
                        className="btn grey lighten-1 black-text"
                        onClick={registerHandler}
                        disabled={loading}
                        >
                            Зарегистрироваться
                        </button>
                    </div>
                </div>
           </div>
        </div>
    </>
}