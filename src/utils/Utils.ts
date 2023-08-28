import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { ApiResponse, QuizAttempt } from "domain/Types";
import { profileImages } from "./ProfileImages";

export namespace Utils {
  export function getQuizAttemptById(attempts: QuizAttempt[], id: number) {
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
      if (data) return data.message;
    }

    return "Request failed";
  }

  export function getUserImage(id: string) {
    const image = profileImages.find((image) => image.id === id);
    return image ?? profileImages[0]; // Nullish coalescing
  }
}
