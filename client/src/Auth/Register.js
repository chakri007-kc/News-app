import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './register.css'


const Register = () => {
    const navigate = useNavigate();

    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const registerUser = async(e) => {
        e.preventDefault();
        const newUser = {
            name,
            email,
            password
        }
        const res = await axios.post('http://localhost:5050/register',newUser)
        console.log(res.data)
        console.log(res)
        if(res.data.status === "ok"){
            //  window.location.href='/login'
             navigate(`/login`);
        }
        else{
            alert('Email already exists')
        }
    }


    return (
        <div className="register">
            <h1 className="title1">Register</h1>
            <form onSubmit={registerUser}>
                <input className="name" type="text" placeholder="name" size={30} value={name} onChange={(e)=> setname(e.target.value)} /> <br/>
                <input className="email" type="text" placeholder="email" size={30} value={email} onChange={(e)=> setemail(e.target.value)} /> <br/>
                <input className="password" type="password" placeholder="password" size={30} value={password} onChange={(e)=> setpassword(e.target.value)} /> <br/>
                <h3 className='shift'>already registered? <a href="/login">login</a> </h3>
                <input className="submit" type="submit" value="Register"/>
            </form>
        </div>
    )
}

export default Register
