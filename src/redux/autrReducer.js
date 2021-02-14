import { authAPI, HeaderAPI } from "../api/api";

const SET_USER_DATE = "SET_USER_DATA";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATE: {
      return { ...state, ...action.data, isAuth:true };
    }
    default:
      return state;
  }
};

export const setAuthUserData = (userId,email,login)=>({type:SET_USER_DATE,data:{userId,email,login}})

export const Autharization = ()=>{
  return (dispatch)=>{
    authAPI.authMe().then((response) => {
      if(response.data.resultCode == 0){
        // console.log(response);
        let{id,login,email} = response.data.data;
        // console.log(id,login,email);
        dispatch(setAuthUserData(id, email, login));
      }
      // console.log(response);
      // let { id, login, email } = response;
      // // debugger;
      // dispatch(setAuthUserData(id, email, login));
    });
  }
}

export default authReducer;

