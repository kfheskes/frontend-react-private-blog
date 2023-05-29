import React, {useState} from "react";
import './Login.css';
import {useNavigate} from "react-router-dom";



function Login({ toggleIsAuth }) {

    const navigate = useNavigate();
    const [userName, setUserName] = useState ('')
    const [password, setPassword] = useState ('')
    function handleLogin() {
        toggleIsAuth(true);
        navigate('/');
    }

    console.log(handleLogin)

    return (
     <>
         <h2>Login pagina</h2>
         <h3> Druk op de knop om in te loggen!</h3>
         <form>
             <div>
               <label htmlFor="username">Gebruikersnaam</label>
               <input
               type="text"
               id="username"
               value={userName}
               onChange={(e) => setUserName(e.target.value)}
               />
             </div>
            <div>
                <label htmlFor="password">Wachtwoord</label>
                <input
                    type="password"
                    id="password"
                   value= {password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

         </form>

         <button type="button" onClick={handleLogin}>
             Inloggen
         </button>
     </>
    )
}

export default Login
