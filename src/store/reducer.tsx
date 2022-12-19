import { combineReducers } from "redux";
import loginReducer from "./slices/auth/loginSlice";
import hrReducer from './slices/hr'
import maintenanceReducer from "./slices/maintenance"

export default combineReducers({
  login: loginReducer,
  hr: hrReducer,
  maintenance: maintenanceReducer
});
