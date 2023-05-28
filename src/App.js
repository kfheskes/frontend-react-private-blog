import React, {useState} from 'react';
import './App.css';
import {Routes, Route, Navigate} from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Blogposts from "./pages/blogposts/Blogposts";
import BlogpostsPage from "./pages/blogpostsPage/BlogpostsPage";


// // We houden in de state bij of iemand is "ingelogd" (simpele versie) {useState} importeren bovenin bij react



function App() {

    const [isAuth, toggleIsAuth] = useState(false);



    return (
        <>
            <Nav auth={isAuth} toggleIsAuth={toggleIsAuth}/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login toggleAuth={ toggleIsAuth}/>}/>
                <Route path="/blogposts" element={isAuth ? <Blogposts /> : <Navigate to= "/login"/> }/>
                <Route path="/blogposts/:id" element={isAuth ? <BlogpostsPage/> : <Navigate to="/login"/>} />
            </Routes>
        </>
    );
}

export default App;