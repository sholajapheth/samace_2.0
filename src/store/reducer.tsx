import { combineReducers } from "redux";
import loginReducer from "./slices/auth/loginSlice";
import hrReducer from './slices/hr'

export default combineReducers({
  login: loginReducer,
  hr: hrReducer,
});
