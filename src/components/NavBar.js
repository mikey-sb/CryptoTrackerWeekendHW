import React from 'react'
import {Link} from 'react-router-dom'


const NavBar = () => {
    return (
        <div>
            <ul className="nav-ul">
                <li>
                    <Link to="/">Home</Link>
                </li>
                
                <li>
                    <Link to="/wallet">Wallet</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar
