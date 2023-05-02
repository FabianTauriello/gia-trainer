import { CustomButton } from "./CustomButton";
import { Question } from "domain/Types";
import { useContext } from "react";
import { QuizContext } from "domain/QuizContextProvider";
import { Banner } from "./Banner";

export function CategoryIntro({}: {}) {
  const { currentQuestion, categoriesStarted, setCategoriesStarted } = useContext(QuizContext);

  function getCategoryDescription() {
    switch (currentQuestion.category) {
      case "Reasoning":
        return (
          <p>
            The Reasoning section of the GIA test measures your ability to make inferences and draw logical conclusions, as well as
            some short-term memory skills. In each question, you will be given a statement describing a relationship between two or
            more individuals or objects. When you feel ready, click on 'Click to continue' found above the statement. The statement
            will then be replaced with a question.
          </p>
        );
      case "Perceptual Speed":
        return (
          <>
            <p>
              The Perceptual Speed section assesses how quickly you process visual data. You will be presented with 4 pairs of upper
              and lower case letters. You have to decide how many vertical pairs contain the same letter.
            </p>
            <p>Letters are considered pairs only when they are one on top of the other.</p>
          </>
        );
      case "Number Speed and Accuracy":
        return (
          <p>
            The Number Speed and Accuracy GIA test section assesses your ability to perform simple numerical tasks quickly and
            accurately. In each question, you will be presented with three numbers. Identify the lowest and highest numbers, and then
            calculate their differences from the third, middle number (the median). Your task is to choose the number furthest from the
            median.
          </p>
        );
      case "Word Meaning":
        return (
          <p>
            The Word Meaning test section requires you to identify words that have a similar meaning or are related in some way. In
            each question, you will be given three words, two of which have something in common. Choose the odd one out.
          </p>
        );
      case "Spatial Visualisation":
        return (
          <>
            <p>
              The Spatial Visualisation test section examines your ability to rotate objects mentally. In each question, you will be
              shown two pairs of rotated letters. You will have to decide how many of the boxes contain the same shape.
            </p>
            <p>Mirror images are not considered the same shape.</p>
          </>
        );
      default:
        throw new Error(`There is no description for category ${currentQuestion.category}.`);
    }
  }

  function handleStartCategory() {
    setCategoriesStarted((prev) => [...prev, currentQuestion.category]);
  }

  return (
    <div className="h-screen">
      <Banner title={`Category ${categoriesStarted.length + 1}: ${currentQuestion.category}`} />
      <div className="px-4 md:px-0 lg:mx-28">
        <div className="py-8">{getCategoryDescription()}</div>
        <CustomButton text="Start Test" handleClick={handleStartCategory} customCss="bg-primary-500 hover:bg-primary-400" />
      </div>
    </div>
  );
}
