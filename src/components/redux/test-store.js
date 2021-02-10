import profilePageReducer from "./profilePageReducer";
import dialogsPageReducer from "./dialogsPageReducer";
import navbarPartReducer from "./navbarPartReducer";

let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, post: "Its my first post", likesCount: 14 },
        { id: 2, post: "Hi", likesCount: 88 },
      ],
      newPostText: "it-kamasutra",
    },

    dialogsPage: {
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
    },

    navbarPart: {
      friendsData: [
        {
          img:
            "https://img.pngio.com/person-icon-png-50-px-person-png-1600_1600.png",
          name: "Denis",
        },
        {
          img:
            "https://img.pngio.com/person-icon-png-50-px-person-png-1600_1600.png",
          name: "Dima",
        },
        {
          img:
            "https://img.pngio.com/person-icon-png-50-px-person-png-1600_1600.png",
          name: "Ivan",
        },
      ],
    },
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("state changed");
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profilePageReducer(
      this._state.profilePage,
      action
    );
    this._state.dialogsPage = dialogsPageReducer(
      this._state.dialogsPage,
      action
    );
    this._state.navbarPart = navbarPartReducer(this._state.navbarPart, action);

    this._callSubscriber(this._state);
  },
};

window.store = store;

export default store;
