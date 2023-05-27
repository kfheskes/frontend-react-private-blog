import React from "react";
import './Login.css';
import {Link} from "react-router-dom";



const Login = () => {

    return (
     <>
         <h2>Login pagina</h2>
         <h3> Druk op de knop om in te loggen!</h3>
         <button> <Link to="/blogposts">Inloggen </Link> </button>
     </>
    )
}

export default Login
