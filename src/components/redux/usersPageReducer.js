let FOLLOW = "FOLLOW";
let UNFOLLOW = "UNFOLLOW";
let SET_USERS = "SET-USERS";
let SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
let SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT"

let initialState = {
  usersData: [],
  pageSize: 4,
  totalUsersCount: 0,
  currentPage: 1
};

const usersPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        usersData: state.usersData.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        usersData: state.usersData.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS: {
      return { ...state, usersData: action.usersData };
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.totalUsersCount };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage};
    }
    default:
      return state;
  }
};

export const followAC = (userId) => {
  return {
    type: FOLLOW,
    userId,
  };
};

export const unfollowAC = (userId) => {
  return {
    type: UNFOLLOW,
    userId,
  };
};

export const setUsersAC = (usersData) => {
  return {
    type: SET_USERS,
    usersData,
  };
};
export const setTotalUsersCountAC = (totalUsersCount) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount,
  };
};

export const setCurrentPageAC = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage
  }
}

export default usersPageReducer;
