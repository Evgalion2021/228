import React from "react";
import Post from "./Post/Post.jsx";
import classes from "./Myposts.module.css";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "./../../redux/profilePageReducer";

const Myposts = (props) => {
  let postsElements = props.postsData.map((p) => {
    return <Post message={p.post} likesCount={p.likesCount} />;
  });

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={classes.posts}>
      <h3>My Post</h3>
      <div>
        <textarea
          ref={newPostElement}
          value={props.newPostText}
          onChange={onPostChange}
        />
      </div>
      <div>
        <button onClick={onAddPost}>New Post</button>
      </div>
      {postsElements}
    </div>
  );
};

export default Myposts;
