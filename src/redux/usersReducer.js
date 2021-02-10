const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT ="SET_TOTAL_COUNT";

let initialState = {
  users: [],
  pageSize:100,
  totalUsersCount: 0,
  currentPage: 7
};

export const usersReducer = (state = initialState, action) => {
  // debugger;
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id == action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    }
    case UNFOLLOW: {
      // debugger;
      return{
        ...state,
        users: state.users.map((u) => {
          if (u.id == action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    }
    case SET_USERS: {
      // debugger;
      let usersCopy = {...state,users:[...action.users]};
      return usersCopy;
    }
    case SET_CURRENT_PAGE:{
      // debugger;
      return {...state, currentPage: action.pageNumber}
    }
    case SET_TOTAL_COUNT:{
      return {...state, totalUsersCount: action.totalCount}
    }
    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setCurrentPage= (pageNumber) =>({type: SET_CURRENT_PAGE,pageNumber })
export const setTotalUsersCount = (totalCount)=>({type: SET_TOTAL_COUNT, totalCount})
