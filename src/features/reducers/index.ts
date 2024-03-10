import { combineReducers, createStore } from "redux";
import { avatarReducer } from "./avatar";
import { emailReducer } from "./emai";
const rootReducer = combineReducers({
  avatar: avatarReducer,
  email: emailReducer,
});
const store = createStore(rootReducer);
export default store;
