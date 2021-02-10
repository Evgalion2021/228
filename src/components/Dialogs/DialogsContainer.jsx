import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "./../redux/dialogsPageReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

// const DialogsContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState();

//         let addMessage = () => {
//           store.dispatch(addMessageActionCreator());
//         };

//         let onMessageChange = (text) => {
//           store.dispatch(updateNewMessageTextActionCreator(text));
//         };
//         return (
//           <Dialogs
//             addMessage={addMessage}
//             updateNewMessageText={onMessageChange}
//             dialogsData={state.dialogsPage.dialogsData}
//             newMessageText={state.dialogsPage.newMessageText}
//             messagesData={state.dialogsPage.messagesData}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

let mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsPage.dialogsData,
    newMessageText: state.dialogsPage.newMessageText,
    messagesData: state.dialogsPage.messagesData,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreator());
    },
    updateNewMessageText: (text) => {
      dispatch(updateNewMessageTextActionCreator(text));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
