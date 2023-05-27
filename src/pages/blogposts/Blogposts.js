import React from "react";
import "./Blogposts.css";
import posts from "../../data/posts.json";
import {Link} from "react-router-dom";

function Blogposts () {

    return (
        <>
            <h2> Blog overzicht pagina</h2>
            <h3> aantal blogposts: {posts.length} </h3>

            <ul>
                {posts.map((posts) => {
                    return <li key={posts.id}>
                        <Link to={`/blogposts/${posts.id}`}>
                            {posts.title}
                        </Link>
                    </li>
                })}
            </ul>
        </>
    )
}

export default Blogposts