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
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";


let mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsPage.dialogsData,
    newMessageText: state.dialogsPage.newMessageText,
    messagesData: state.dialogsPage.messagesData,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (newMessageBody) => {
      dispatch(addMessageActionCreator(newMessageBody));
    },
  };
};



export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect)(Dialogs);
