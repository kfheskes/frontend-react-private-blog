import React from "react";
import './Nav.css';
import {NavLink, useNavigate} from "react-router-dom";

function Nav({isAuth, toggleIsAuth}) {

    const navigate = useNavigate();

    const handleLogout = () => {
        toggleIsAuth(false);
        navigate('/')
    };


    return (
        <nav>
            <div>

                <ul>

                    <li><NavLink to="/">Home </NavLink></li>
                    { isAuth ?
                        <>
                            <li><NavLink to="./blogposts">Blogposts </NavLink></li>
                            <li>
                                <button type="button" onClick={handleLogout}>
                                    Uitloggen
                                </button>
                            </li>
                            </>
                         :
                    <li><NavLink to="/login">Login</NavLink></li>
                        }
                </ul>
            </div>
        </nav>
    )
}

export default Nav