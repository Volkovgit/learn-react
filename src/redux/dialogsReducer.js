const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

let initialState={
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
}

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        message: state.newMessageText,
        id: 9,
      };
      state.messages.push(newMessage);
      state.newMessageText = "";
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      return state;
    default: return state;
  }
};

export const addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE,
  };
};

export const updateNewMessageActionCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text,
  };
};

