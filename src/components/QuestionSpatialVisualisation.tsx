import { useContext, useState } from "react";
import { Choices } from "./Choices";
import { QuestionContainer } from "./QuestionContainer";
import { QuizContext } from "domain/QuizContextProvider";

export function QuestionSpatialVisualisation() {
  const { currentQuestion, inReview } = useContext(QuizContext);

  return (
    <QuestionContainer>
      <div className="flex justify-center mb-6 gap-5 text-center">
        {currentQuestion.letters?.map((letter, i) => {
          const firstLetter = letter[0];
          const secondLetter = letter[1];
          //   TODO using in-line styling here instead of tailwind :(
          return (
            <div key={i} className="text-7xl text-black bg-cream p-7 rounded font-medium">
              <div
                style={{
                  transform: `rotate(${firstLetter.rot}deg) ${firstLetter.flip ? "scale(-1, 1)" : "scale(1, 1)"}`,
                }}
              >
                {firstLetter.char}
              </div>
              <div
                style={{
                  transform: `rotate(${secondLetter.rot}deg) ${secondLetter.flip ? "scale(-1, 1)" : "scale(1, 1)"}`,
                }}
              >
                {secondLetter.char}
              </div>
            </div>
          );
        })}
      </div>
      <Choices />
    </QuestionContainer>
  );
}
