import { createStore } from "redux";
import userReducer from "./reducer/UserReducer";

const store = createStore(userReducer)

export default store