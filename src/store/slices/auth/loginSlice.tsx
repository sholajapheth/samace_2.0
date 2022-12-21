import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../apiActions";
import { AppDispatch } from "../../configureStore";




const initialState = {
  details: JSON.parse(localStorage.getItem("currentUser") || "{}"),
  loading: false,
  isLoggedIn: localStorage.getItem("currentUser") && true,
  
};

const loginSlice = createSlice({
  name: "login",
  initialState: initialState,

  reducers: {
    loginRequested: (state) => {
      state.loading = true;
    },

    userLoggedin: (state, action) => {
      localStorage.setItem("currentUser", JSON.stringify(action.payload.data));
      state.isLoggedIn = true;
      state.loading = false;
      window.location.reload()
      
    },
    loginFailed: (state, action) => {
      alert(action.payload.response.data.message);
      state.loading = false;
    },
    logUserOut: () => {
      localStorage.clear();
      window.location.replace("/")
    },

    resetPasswordType: (action:any)=>{
      alert(action.payload.data.message);
      console.log("requested for reset")
    }
 
    
  },
});

export const { userLoggedin, loginRequested, loginFailed, logUserOut, resetPasswordType } =
  loginSlice.actions;

export const logIn = (data:any, url?:any, extraheaders?:any) => (dispatch:AppDispatch, getState:any) => {
  console.log(getState())
  // if (getState().login.details) return;
  if (getState().login.loading === true) return;

  dispatch(
    apiCallBegan({
      onStart: loginRequested.type,
      onSuccess:  userLoggedin.type,
      onError: loginFailed.type,
      url: !url && "/auth/login",
      method: "POST",
      data,
      extraheaders,
    })
  );
};

export const logOut = () => (dispatch:AppDispatch) => {
  dispatch({ type: logUserOut.type });

};

export const resetPassword = (data:string)=>(dispatch: AppDispatch) =>{
  dispatch(
    apiCallBegan({
      onStart: loginRequested.type,
      onSuccess:resetPasswordType.type,
      onError: loginFailed.type,
      url: "/auth/request-reset-password",
      method: "GET",
      data,
    })
  )
}

export default loginSlice.reducer;