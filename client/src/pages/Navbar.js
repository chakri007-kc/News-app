import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <ul>
                <li><Link to="/">TRENDING</Link></li>
                <li><Link to="/location">LOCATION</Link></li>
                <li><Link to="/categories">CATEGORIES</Link></li>
                <li><Link to="/collection">COLLECTION</Link></li>
            </ul>
        </div>
    )
}

export default Navbar
