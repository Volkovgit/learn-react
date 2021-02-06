const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";


let initialState ={
      posts: [
        { id: 1, message: "Hi, how are you?", likeCount: 5 },
        { id: 2, message: "It's my first post", likeCount: 35 },
        { message: "pososi", id: 3, likeCount: 228 },
        { message: "auf", id: 3, likeCount: 228 },
      ],
      newPostText: "1"
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likeCount: 0,
      };
      state.posts.push(newPost);
      state.newPostText = "";
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default: return state;
  }

};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};


export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};