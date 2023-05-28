import React from "react";
import './Login.css';
import {useNavigate} from "react-router-dom";



function Login({ toggleIsAuth }) {

    const navigate = useNavigate();

    function handleLogin() {
        toggleIsAuth(true);
        navigate('/blogposts');
    }

    console.log(handleLogin)

    return (
     <>
         <h2>Login pagina</h2>
         <h3> Druk op de knop om in te loggen!</h3>
         <button type="button" onClick={handleLogin}>
             Inloggen
         </button>
     </>
    )
}

export default Login
