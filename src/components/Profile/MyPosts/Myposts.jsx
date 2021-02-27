import React from "react";
import Post from "./Post/Post.jsx";
import classes from "./Myposts.module.css";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validarors.js";
import { Textarea } from "../../common/FormsControls/FormsControls.jsx";

const maxLength10 = maxLengthCreator(10)

const Myposts = (props) => {
  let postsElements = props.postsData.map((p) => {
    return <Post message={p.post} likesCount={p.likesCount} />;
  });

  let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={classes.posts}>
      <h3>My Post</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      {postsElements}
    </div>
  );
};

let AddNewPostForm = (props) => {
  return (<form onSubmit={props.handleSubmit}>
    <div>
      <Field name="newPostText" component={Textarea} validate={[required, maxLength10]} placeholder="message" />
    </div>
    <div>
      <button>New Post</button>
    </div>
  </form>)
}

let AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm)

export default Myposts;
