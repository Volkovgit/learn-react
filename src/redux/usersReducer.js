import { userAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "SET_TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users: [],
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
};

export const usersReducer = (state = initialState, action) => {
  // debugger;
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    }
    case UNFOLLOW: {
      // debugger;
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    }
    case SET_USERS: {
      // debugger;
      let usersCopy = { ...state, users: [...action.users] };
      return usersCopy;
    }
    case SET_CURRENT_PAGE: {
      // debugger;
      return { ...state, currentPage: action.pageNumber };
    }
    case SET_TOTAL_COUNT: {
      return { ...state, totalUsersCount: action.totalCount };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      // debugger;
      let testValue = {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id != action.userId),
      };
      // debugger;
      return {
        ...state,
        followingInProgress: action.followingInProgress
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id != action.userId),
      };
    }
    default:
      return state;
  }
};

export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (pageNumber) => ({
  type: SET_CURRENT_PAGE,
  pageNumber,
});
export const setTotalUsersCount = (totalCount) => ({
  type: SET_TOTAL_COUNT,
  totalCount,
});
export const setFetchingAC = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const setFollowingProgressAC = (followingInProgress, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  followingInProgress,
  userId,
});

export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(setFetchingAC(true));
    userAPI.getUsers(currentPage, pageSize).then((response) => {
      // debugger;
      dispatch(setFetchingAC(false));
      dispatch(setUsersAC(response.items));
      dispatch(setTotalUsersCount(response.totalCount));
    });
  };
};

export const follow = (userId) => {
  return (dispatch) => {
    dispatch(setFollowingProgressAC(true, userId));
    userAPI.follow(userId).then((response) => {
      if (response.resultCode === 0) {
        dispatch(followSuccess(userId));
      }
      dispatch(setFollowingProgressAC(false, userId));
    });
  };
};

export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(setFollowingProgressAC(true, userId));
    userAPI.unfollow(userId).then((response) => {
      if (response.resultCode === 0) {
        dispatch(unfollowSuccess(userId));
      }
      dispatch(setFollowingProgressAC(false, userId));
    });
  };
};
