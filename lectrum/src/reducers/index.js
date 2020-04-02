import { combineReducers } from "redux";

import login from "./loginReducer";
import signUp from "./signUpReducer"


const rootReducer = combineReducers({
  login,
  signUp
});

export default rootReducer;
