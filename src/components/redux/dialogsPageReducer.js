let ADD_MESSAGE = "ADD-MESSAGE";
let UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
  messagesData: [
    { id: 1, message: "Hi" },
    { id: 2, message: "Hellow" },
    { id: 3, message: "Good day" },
    { id: 4, message: "qqqq" },
    { id: 5, message: "zdarova" },
  ],
  dialogsData: [
    { id: 1, name: "Ivan Zhukov" },
    { id: 2, name: "Yuryi Turos" },
    { id: 3, name: "Dmitry Sich" },
    { id: 4, name: "Denis Shishkov" },
    { id: 5, name: "Aleksey Overchuk" },
  ],
  newMessageText: "Hellow There",
};

const dialogsPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = state.newMessageText;
      return {
        ...state,
        newMessageText: "",
        messagesData: [...state.messagesData, { id: 6, message: newMessage }],
      };
    case UPDATE_NEW_MESSAGE_TEXT:
      return { ...state, newMessageText: action.newText };
    default:
      return state;
  }
};

export const addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE,
  };
};

export const updateNewMessageTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text,
  };
};

export default dialogsPageReducer;
