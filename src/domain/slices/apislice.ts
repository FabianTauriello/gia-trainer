import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "domain/Store";
import { ApiResponse, LoginCredentials, NewUser, Question, QuizAttempt, User } from "domain/Types";

// Define the single API slice object
export const apiSlice = createApi({
  // The cache reducer expects to be added at 'state.api' (already default - this is optional)
  reducerPath: "api",
  // All of the requests will have URLs starting with '/'
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001",
    prepareHeaders: (headers, { getState }) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const token = (getState() as RootState).auth.token;
      if (token) headers.set("authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  // The "endpoints" represent operations and requests for this server
  endpoints: (builder) => ({
    // verifies identity of user on server, returning the new user and a jwt if successful
    signIn: builder.mutation<ApiResponse<{ user: User; token: string }>, LoginCredentials>({
      query: (credentials) => ({
        url: "signIn",
        method: "POST",
        body: credentials,
      }),
    }),
    // creates a user on server, returning the new id if successful
    signUp: builder.mutation<ApiResponse<string>, NewUser>({
      query: (newUser) => ({
        url: "signUp",
        method: "POST",
        body: newUser,
      }),
    }),
    getQuizQuestions: builder.query<ApiResponse<Question[]>, void>({
      query: () => "/quizQuestions",
    }),
    addQuizAttempt: builder.query<ApiResponse<string>, { userId: string; attempt: QuizAttempt }>({
      query: () => "/addQuizAttempt",
    }),
  }),
});

// Export the auto-generated hook for the 'getQuizQuestions' query endpoint
export const { useGetQuizQuestionsQuery, useLazyGetQuizQuestionsQuery, useSignInMutation, useSignUpMutation } = apiSlice;
