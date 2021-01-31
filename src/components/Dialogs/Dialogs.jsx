import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "./../redux/dialogsPageReducer";

const Dialogs = (props) => {
  let state = props.store.getState().dialogsPage;

  let dialogsElements = state.dialogsData.map((d) => {
    return <DialogItem name={d.name} id={d.id} />;
  });

  let messagesElements = state.messagesData.map((m) => {
    return <Message message={m.message} id={m.id} />;
  });

  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.store.dispatch(updateNewMessageTextActionCreator(text));
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>{dialogsElements}</div>
      <div className={classes.messages}>
        {messagesElements}
        <div>
          <textarea
            ref={newMessageElement}
            value={state.newMessageText}
            onChange={onMessageChange}
          />
        </div>
        <div>
          <button onClick={addMessage}>New Message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
