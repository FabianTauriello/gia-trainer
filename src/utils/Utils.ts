import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { ApiResponse, QuizAttempt } from "domain/Types";

export namespace Utils {
  export function getQuizAttemptById(attempts: QuizAttempt[], id: string) {
    const i = attempts.findIndex((attempts) => attempts.id === id);
    return attempts[i];
  }

  /**
   * Type predicate to narrow an unknown error to `FetchBaseQueryError`
   */
  export function isFetchBaseQueryError(error: unknown): error is FetchBaseQueryError {
    return typeof error === "object" && error != null && "status" in error;
  }

  export function getErrorMessage(error: FetchBaseQueryError | SerializedError | undefined) {
    if (Utils.isFetchBaseQueryError(error)) {
      const data = error.data as ApiResponse;
      return "fail";
      return data.message;
    }

    return "Request failed";
  }
}
