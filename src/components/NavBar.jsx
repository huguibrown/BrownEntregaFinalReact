import React from "react";
import { CartWidget } from "./CartWidget";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <div className="container">
            <nav className="nav">
                <div className="nav__brand">
                    <img src="./images/Logo violeta.jpeg" width="300px" alt="" />
                </div>
                <ul className="nav__list">
                    <li> 
                        <NavLink className="nav__link"  to = '/'>Home</NavLink>
                    </li>
                
                    <li> 
                        <NavLink className="nav__link"  to = '/categoria/indumentaria'>Indumentaria</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav__link" to='/categoria/accesorios'>Accesorios</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav__link" to='/cart'>
                            <CartWidget/>
                        </NavLink> 
                    </li>
                </ul>
            </nav>
        </div>
        )
}

export default NavBar;
