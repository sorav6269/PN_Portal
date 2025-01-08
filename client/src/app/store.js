import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { authApi } from "./api/authApi";
export const appStore = configureStore({
  
        reducer: rootReducer,
        // middleware provide karane hote hai 
        middleware:(defaultMddleware) => defaultMddleware().concat(authApi.middleware)

});