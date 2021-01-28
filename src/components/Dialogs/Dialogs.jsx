import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogsData.map((d) => {
    return <DialogItem name={d.name} id={d.id} />;
  });

  let messagesElements = props.state.messagesData.map((m) => {
    return <Message message={m.message} id={m.id} />;
  });

  let newMessageElement = React.createRef();

  let addMessage = () => {
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
            value={props.state.newMessageText}
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

class MyClass {
  constructor() {
    this.prop = 1;
  }
}

const instance = new MyClass();
console.log(instance.prop);
