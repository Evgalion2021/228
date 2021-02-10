import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "./../redux/dialogsPageReducer";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsData.map((d) => {
    return <DialogItem name={d.name} id={d.id} />;
  });

  let messagesElements = props.messagesData.map((m) => {
    return <Message message={m.message} id={m.id} />;
  });

  let newMessageElement = React.createRef();

  let onAddMessage = () => {
    props.addMessage();
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewMessageText(text);
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>{dialogsElements}</div>
      <div className={classes.messages}>
        {messagesElements}
        <div>
          <textarea
            ref={newMessageElement}
            value={props.newMessageText}
            onChange={onMessageChange}
          />
        </div>
        <div>
          <button onClick={onAddMessage}>New Message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
