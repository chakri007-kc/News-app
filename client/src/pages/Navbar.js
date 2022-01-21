import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


const handleChange = (e) => {
    // e.preventDefault()
    localStorage.removeItem('token')
    window.location.reload()
}

const k=localStorage.getItem('token');
const Navbar = () => {
    console.log(k)
    return (
        <div className="navbar">

            <div className="start" >
                <h3> <i class="fas fa-infinity"></i> NEWS</h3>
            </div>
                <li><Link to="/">TRENDING</Link></li>
                <li><Link to="/location">LOCATION</Link></li>
                <li><Link to="/categories">CATEGORIES</Link></li>
                <li><Link to="/collection">COLLECTION</Link></li>
                {k!==null ? <li onClick={handleChange}>LOGOUT</li> : <li><Link to="/login">LOGIN</Link></li>}
            </div>
    )
}

export default Navbar
