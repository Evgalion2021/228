import { profileAPI, usersAPI } from "../../api/api";

let ADD_POST = "ADD-POST";
let SET_USER_PROFILE = "SET-USER-PROFILE";
let SET_STATUS = "SET-STATUS";

let initialState = {
  postsData: [
    { id: 1, post: "Its my first post", likesCount: 14 },
    { id: 2, post: "Hi", likesCount: 88 },
  ],
  profile: null,
  status: "",
};

const profilePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 3,
        post: action.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
        newPostText: "",
      };
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
    case SET_STATUS:
      return { ...state, status: action.status };
    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => {
  return {
    type: ADD_POST,
    newPostText,
  };
};

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setStatus = (status) => {
  return { type: SET_STATUS, status };
};

export const getUserProfile = (userId) => (dispatch) => {
  profileAPI.getProfile(userId).then((response) => {
    dispatch(setUserProfile(response.data));
  });
};

export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then((response) => {
    dispatch(setStatus(response.data));
  });
};

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
};

export default profilePageReducer;
