import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



const Login = () => {

    const navigate = useNavigate();

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const loginUser = async(e) => {
        e.preventDefault();
        const newUser = {
            email,
            password
        }
        const res = await axios.post('http://localhost:5050/login',newUser)
        // console.log(res.data)
        if(res.data.status === "ok"){
            localStorage.setItem('token',res.data.token)
            alert('login successful')
            navigate(`/`);
        }
        else{
            alert(res.data.status)
        }
    }



    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={loginUser}>
                <input type="text" placeholder="email" value={email} onChange={(e)=> setemail(e.target.value)} /> <br/>
                <input type="password" placeholder="password" value={password} onChange={(e)=> setpassword(e.target.value)} /> <br/>
                <input type="submit" value="Login"/>
            </form>
        </div>
    )
}

export default Login
