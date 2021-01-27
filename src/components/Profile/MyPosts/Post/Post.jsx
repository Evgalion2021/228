import React from 'react';
import classes from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={classes.post}>
            <img src="https://cdn.dribbble.com/users/5592443/screenshots/14279501/drbl_pop_r_m_rick_4x.png"></img>
            {props.message}
            <div>Like {props.likesCount}</div>
        </div>
    )
  }
  
  export default Post;
  