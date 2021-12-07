import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

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
        <div>
            <h1>Register</h1>
            <form onSubmit={registerUser}>
                <input type="text" placeholder="name" value={name} onChange={(e)=> setname(e.target.value)} /> <br/>
                <input type="text" placeholder="email" value={email} onChange={(e)=> setemail(e.target.value)} /> <br/>
                <input type="password" placeholder="password" value={password} onChange={(e)=> setpassword(e.target.value)} /> <br/>
                <input type="submit" value="Register"/>
            </form>
        </div>
    )
}

export default Register
