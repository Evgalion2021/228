let rerenderEntireTree = () => {
  console.log("state changed");
};

let state = {
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
};

window.state = state;

export let addPost = () => {
  let newPost = {
    id: 3,
    post: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.postsData.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export let addMessage = () => {
  let newMessage = {
    id: 6,
    message: state.dialogsPage.newMessageText,
  };
  state.dialogsPage.messagesData.push(newMessage);
  state.dialogsPage.newMessageText = "";
  rerenderEntireTree(state);
};

export let updateNewMessageText = (newText) => {
  state.dialogsPage.newMessageText = newText;
  rerenderEntireTree(state);
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
};

export default state;
