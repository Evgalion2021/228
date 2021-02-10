import React from "react";
import Post from "./Post/Post.jsx";
import classes from "./Myposts.module.css";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "./../../redux/profilePageReducer";
import Myposts from "./Myposts";
import { connect } from "react-redux";

//

let mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    updateNewPostText: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    },
  };
};

const MypostsContainer = connect(mapStateToProps, mapDispatchToProps)(Myposts);

export default MypostsContainer;
