import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Section } from "domain/Types";

// Define the single API slice object
export const apiSlice = createApi({
  // The cache reducer expects to be added at 'state.api' (already default - this is optional)
  reducerPath: "api",
  // All of the requests will have URLs starting with '/'
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001",
  }),
  // The "endpoints" represent operations and requests for this server
  endpoints: builder => ({
    // The 'getQuizSections' endpoint is a "query" operation that returns data
    getQuizSections: builder.query<Section[], void>({
      // The URL for the request is 'http://localhost:3001/quizSections'
      query: () => "/quizSections",
    }),
    getTestData: builder.query<{ name: string }[], void>({
      query: () => "/testData",
    }),
  }),
});

// Export the auto-generated hook for the 'getQuizSections' query endpoint
export const { useGetQuizSectionsQuery, useGetTestDataQuery } = apiSlice;
