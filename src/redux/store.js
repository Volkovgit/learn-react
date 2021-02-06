import { dialogsReducer } from "./dialogsReducer";
import { profileReducer } from "./profileReducer";

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likeCount: 5 },
        { id: 2, message: "It's my first post", likeCount: 35 },
        { message: "pososi", id: 3, likeCount: 228 },
        { message: "auf", id: 3, likeCount: 228 },
      ],
      newPostText: "1",
    },
    messagesPage: {
      dialogs: [
        { name: "Sasha", id: 1 },
        { name: "Dima", id: 2 },
        { name: "Sveta", id: 3 },
      ],
      messages: [
        { message: "Hi", id: 0 },
        { message: "How is your", id: 1 },
        { message: "Yo", id: 2 },
        { message: "lorem  lorem ", id: 3 },
      ],
      newMessageText: "",
    },
    sideBar: {
      friends: [
        {
          img:
            "https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars.png",
          name: "Sasha",
        },
        {
          img:
            "https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars.png",
          name: "Pasha",
        },
        {
          img:
            "https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars.png",
          name: "Sveta",
        },
        {
          img:
            "https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars.png",
          name: "Andrew",
        },
      ],
    },
  },

  getState() {
    return this._state;
  },
  rerenderEntire() {
    console.log("state was changed");
  },
  subscribe(observer) {
    this.rerenderEntire = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage,action);
    this._state.messagesPage = dialogsReducer(this._state.messagesPage,action);
    this.rerenderEntire(this._state);
  },
};





export default store;
