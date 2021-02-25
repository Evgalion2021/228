let ADD_MESSAGE = "ADD-MESSAGE";

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
};

const dialogsPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = action.newMessageBody;
      return {
        ...state,
        messagesData: [...state.messagesData, { id: 6, message: newMessage }],
      };
    default:
      return state;
  }
};

export const addMessageActionCreator = (newMessageBody) => {
  return {
    type: ADD_MESSAGE,
    newMessageBody,
  };
};

export default dialogsPageReducer;
