import React from 'react';
import Post from "./Post/Post.jsx";
import classes from "./Myposts.module.css";

const Myposts = (props) => {
    let postsElements = props.postsData.map((p) => {
        return <Post message={p.post} likesCount={p.likesCount} />
    });

    return (
        <div className={classes.posts}>
            <h3>My Post</h3>
            <div><textarea></textarea></div>
            <div><button>New Post</button></div>
            {postsElements}
        </div>
    )
}

export default Myposts;
