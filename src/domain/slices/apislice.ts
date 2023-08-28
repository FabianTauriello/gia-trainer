import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "domain/store";
import { ApiResponse, LoginCredentials, NewUser, Profile, Question, QuizAttempt, Settings, User } from "domain/Types";

// Define the single API slice object
export const apiSlice = createApi({
  // The cache reducer expects to be added at 'state.api' (already default - this is optional)
  reducerPath: "api",
  // All of the requests will have URLs starting with '/'
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_WEB_SERVER_BASE_URL,
    // credentials:
    prepareHeaders: (headers, { getState }) => {
      // By default, if there is a token in the store, use that for authenticated requests
      const token = (getState() as RootState).auth.token;
      if (token) headers.set("authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  // The "endpoints" represent operations and requests for this server
  endpoints: (builder) => ({
    // Verifies identity of user on server, returning the user and a jwt if successful
    signIn: builder.mutation<ApiResponse<{ user: User; token: string }>, LoginCredentials>({
      query: (credentials) => ({
        url: "/signIn",
        method: "POST",
        body: credentials,
      }),
    }),
    // Creates a user on server, returning the new id if successful
    signUp: builder.mutation<ApiResponse<string>, NewUser>({
      query: (newUser) => ({
        url: "/signUp",
        method: "POST",
        body: newUser,
      }),
    }),
    addQuizAttempt: builder.mutation<ApiResponse<number>, { userId: number; attempt: QuizAttempt }>({
      query: (newQuizAttempt) => ({
        url: "/addQuizAttempt",
        method: "POST",
        body: newQuizAttempt,
      }),
    }),
    getQuizAttempts: builder.query<ApiResponse<QuizAttempt[]>, number>({
      query: (userId) => `/getQuizAttempts/${userId}`,
    }),
    getQuizQuestions: builder.query<ApiResponse<Question[]>, void>({
      query: () => "/quizQuestions",
    }),
    getUserSettings: builder.query<ApiResponse<Settings>, number>({
      query: (userId) => `/getUserSettings/${userId}}`,
    }),
    updateUser: builder.mutation<ApiResponse<string>, { newProfile: Profile; userId: number }>({
      query: (data) => ({
        url: `/updateUser/${data.userId}`,
        method: "POST",
        body: data.newProfile,
      }),
    }),
  }),
});

// Export the auto-generated hook for the 'getQuizQuestions' query endpoint
export const {
  useSignInMutation,
  useSignUpMutation,
  useGetQuizQuestionsQuery,
  useAddQuizAttemptMutation,
  useGetUserSettingsQuery,
  useLazyGetUserSettingsQuery,
  useUpdateUserMutation,
  useGetQuizAttemptsQuery,
} = apiSlice;
