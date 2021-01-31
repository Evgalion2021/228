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
  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
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
        <button onClick={addPost}>New Post</button>
      </div>
      {postsElements}
    </div>
  );
};

export default Myposts;
