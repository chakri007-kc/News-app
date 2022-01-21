import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './register.css'


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
            window.location.reload()
        }
        else{
            alert(res.data.status)
        }
    }



    return (
        <div className='login'>
            <h1 className="title1">Login</h1>
            <form onSubmit={loginUser}>
                <input className='email-1' type="text" placeholder="email" size={30} value={email} onChange={(e)=> setemail(e.target.value)} /> <br/>
                <input className='password' type="password" placeholder="password" size={30} value={password} onChange={(e)=> setpassword(e.target.value)} /> <br/>
                <h3 className='shift'>new user? <a href="/register">register</a></h3>
                <input className='submit' type="submit" value="Login"/>
            </form>
        </div>
    )
}

export default Login
