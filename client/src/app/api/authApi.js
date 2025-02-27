import { userLoggedIn } from "@/features/authSlice";
import {createApi,fetchBaseQuery}from "@reduxjs/toolkit/query/react"
const USER_API = "http://localhost:10000/api/user";


export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: USER_API,
    Credential: "include",
  }),

  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (inputData) => ({
        url: "register",
        method: "POST",
        body: inputData,
      }),
    }),

    // loginUserMutation
    loginUser: builder.mutation({
      query: (inputData) => ({
        url: "login",
        method: "POST",
        body: inputData,
      }),
      async onQuueryStarted(_, { queryFulfilled,dispatch}) {
        try {
          const reasult = await queryFulfilled;
          dispatch(userLoggedIn({ user: reasult.data.user }));
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation } = authApi;

