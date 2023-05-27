import React from "react";
import './BlogpostsPage.css'
import {useParams} from "react-router-dom";
import posts from '../../data/posts.json';

function BlogpostsPage() {

    const { id } = useParams();
    console.log(id)

    const currentPost = posts.find((posts) => {
        return posts.id === id;

    });
    console.log(currentPost)
    return (
        <>
            <h2>{currentPost.title}</h2>
            <h3>{currentPost.content}</h3>
            <p>{currentPost.date}</p>
        </>
    );
}

export default BlogpostsPage