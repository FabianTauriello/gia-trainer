import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "domain/store";
import {
  ApiResponse,
  LoginCredentials,
  NewUser,
  PageInfo,
  Profile,
  Question,
  QuizAttempt,
  Ranking,
  Settings,
  User,
} from "domain/types";

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
    getAllQuizAttempts: builder.query<ApiResponse<QuizAttempt[]>, number>({
      query: (userId) => `/getAllQuizAttempts/${userId}`,
    }),
    getQuizAttempts: builder.query<
      ApiResponse<{ attempts: QuizAttempt[]; totalPages: number; totalAttemptsCount: number }>,
      { userId: number; pageInfo: PageInfo }
    >({
      query: (requestData) => ({
        url: `/getQuizAttempts/${requestData.userId}?page=${requestData.pageInfo.page}&limit=${requestData.pageInfo.limit}`,
        method: "GET", // TODO need to specify this??
      }),
    }),
    getQuizQuestions: builder.query<ApiResponse<Question[]>, void>({
      query: () => "/quizQuestions",
    }),
    getRankingHistory: builder.query<ApiResponse<Ranking[]>, number>({
      query: (userId) => ({
        url: `/getRankingHistory/${userId}`,
        method: "GET",
      }),
    }),
    getUserSettings: builder.query<ApiResponse<Settings>, number>({
      query: (userId) => `/getUserSettings/${userId}}`,
    }),
    updateUserSettings: builder.mutation<ApiResponse<string>, { userId: number; newSettings: Settings }>({
      query: (requestData) => ({
        url: `/updateUserSettings/${requestData.userId}`,
        method: "POST",
        body: requestData.newSettings,
      }),
    }),
    updateUser: builder.mutation<ApiResponse<string>, { userId: number; newProfile: Profile }>({
      query: (requestData) => ({
        url: `/updateUser/${requestData.userId}`,
        method: "POST",
        body: requestData.newProfile,
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
  useGetAllQuizAttemptsQuery,
  useGetQuizAttemptsQuery,
  useUpdateUserSettingsMutation,
  useGetRankingHistoryQuery,
  useLazyGetRankingHistoryQuery,
} = apiSlice;
