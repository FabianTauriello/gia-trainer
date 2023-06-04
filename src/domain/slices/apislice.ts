import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "domain/Store";
import { ApiResponse, LoginRequest, Question, User } from "domain/Types";

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
    // types: <UserResponse
    signIn: builder.mutation<ApiResponse<{ user: User; token: string }>, LoginRequest>({
      query: (credentials) => ({
        url: "signIn",
        method: "POST",
        body: credentials,
      }),
    }),
    // The 'getQuizQuestions' endpoint is a "query" operation that returns data
    getQuizQuestions: builder.query<Question[], void>({
      // The URL for the request is 'http://localhost:3001/quizQuestions'
      query: () => "/quizQuestions",
    }),
  }),
});

// Export the auto-generated hook for the 'getQuizQuestions' query endpoint
export const { useGetQuizQuestionsQuery, useLazyGetQuizQuestionsQuery, useSignInMutation } = apiSlice;
