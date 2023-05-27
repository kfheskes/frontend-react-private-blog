import React from "react";
import './Nav.css';
import { NavLink } from "react-router-dom";

function Nav({ isAuth, toggleAuth}) {



    return(
        <nav>
            <div>

                <ul>

                    <li><NavLink to="/">Home </NavLink> </li>
                    <li><NavLink to="./login"  >Login </NavLink> </li>
                    <li><NavLink to="./blogposts">Blogposts </NavLink> </li>
                </ul>
                <button type="button" onClick={isAuth}> {() => toggleAuth ( prev => !prev)} </button>
            </div>
        </nav>
    )
}

export default Nav