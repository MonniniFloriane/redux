import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer/UserReducer";

const store = configureStore({
    reducer: rootReducer,
})

export default store