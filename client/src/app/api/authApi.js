import {createApi,fetchBaseQuery}from "@reduxjs/toolkit/query/react"
// import { userLoggedIn } from "@/features/authSlice";
const USER_API = "http://localhost:10000/api/user";


export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery:fetchBaseQuery({
    baseUrl: USER_API,
    Credential: "include",
}),

endpoints:(builder) => ({
    registerUser: builder.mutation({
        query: (inputData)=> ({
        url: "register",
        method: "POST",
        body: inputData,
        }),
    }),
}),
})


export const {
    useRegisterUserMutation
    
} = authApi;