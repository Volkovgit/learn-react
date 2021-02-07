const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    {
      id: 1,
      photoUrl: 'https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-92.jpg',
      followed: false,
      fullname: "Sasha",
      status: "I am a boss",
      location: {
        city: "Yaroslavl",
        country: "Russia",
      },
    },
    {
      id: 2,
      photoUrl: 'https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-92.jpg',
      followed: true,
      fullname: "Pasha",
      status: "I am a boss 2",
      location: {
        city: "Moscow",
        country: "Russia",
      },
    },
    {
      id: 3,
      photoUrl: 'https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-92.jpg',
      followed: false,
      fullname: "Vova",
      status: "I am a boss 3",
      location: {
        city: "Rybinsk",
        country: "Russia",
      },
    },
  ],
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    }
    case SET_USERS: {
      return { ...state, users: [...state.users, ...action.users] };
    }
    default:
      return state;
  }
};


export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
