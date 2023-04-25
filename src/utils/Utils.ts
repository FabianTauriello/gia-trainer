import { QuizAttempt } from "domain/Types";

export namespace Utils {
  export function getQuizAttemptById(attempts: QuizAttempt[], id: string) {
    const i = attempts.findIndex((attempts) => attempts.id === id);
    return attempts[i];
  }
}
