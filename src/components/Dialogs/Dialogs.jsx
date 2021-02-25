import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "./../redux/dialogsPageReducer";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsData.map((d) => {
    return <DialogItem name={d.name} id={d.id} />;
  });

  let messagesElements = props.messagesData.map((m) => {
    return <Message message={m.message} id={m.id} />;
  });

  let newMessageElement = React.createRef();

  let addNewMessage = (values) => {
    props.addMessage(values.newMessageBody)
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>{dialogsElements}</div>
      <div className={classes.messages}>
        {messagesElements}
        <AddMessageFormRedux onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component="textarea" name="newMessageBody" placeholder="Enter your message" />
      </div>
      <div>
        <button>New Message</button>
      </div>
    </form>
  )
}

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm)

export default Dialogs;
