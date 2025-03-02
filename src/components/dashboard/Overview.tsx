import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ReactElement } from "react";
import HighestScoreGraph from "./HighestScoreGraph";
import RankCard from "./RankCard";
import SummaryCard from "./SummaryCard";
import AttemptsGraph from "./AttemptsGraph";
import {
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
  LineElement,
  PointElement,
  LogarithmicScale,
  TimeSeriesScale,
  TimeScale,
  Tooltip as ChartTooltip,
  Title,
} from "chart.js";
import QuizScoreDistribution from "./QuizScoreDistribution";
import AverageScoreGraph from "./AverageScoreGraph";

// setup for different charts
ChartJS.register(
  // Legend,
  Title,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ChartTooltip,
  TimeScale,
  LogarithmicScale,
  TimeSeriesScale
);

export function Overview() {
  return (
    <div className="flex gap-2 md:gap-4 flex-col p-3 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
        <SummaryCard />
        <RankCard />
      </div>
      <div className="card grid grid-cols-1 lg:grid-cols-2 p-3 md:p-8 gap-2 md:gap-4">
        <HighestScoreGraph />
        <AverageScoreGraph />
        {/* TODO add average score over time */}
        {/* TODO show distribution of scores */}
        {/* TODO line graph showing rank over various times */}
      </div>
    </div>
  );
}

// performance metrics:

// The General Intelligence Assessment (GIA) test is designed to measure a user's general intelligence or cognitive abilities. To evaluate a user's performance on the GIA test, you can use various performance metrics. Here are some common metrics used in cognitive testing:
// - Raw Score: The raw score represents the number of questions answered correctly by the user in the GIA test. It provides a basic measure of performance, but it doesn't take into account the difficulty level of the questions.
// - Scaled Score: A scaled score is a standardized score that adjusts for the difficulty level of the questions. It allows for a fairer comparison of performance across different versions of the test.
// - Percentile Rank: The percentile rank indicates the percentage of people who scored below the user on the GIA test. For example, if a user's percentile rank is 75, it means they performed better than 75% of the people who took the test.
// - Stanine: Stanines are another way of standardizing scores, but they divide the distribution into nine equal parts, with a stanine of 1 representing the lowest performance and a stanine of 9 representing the highest performance.
// - Age Equivalent Score: The age equivalent score is an attempt to compare the user's performance to the performance of individuals at different ages. For example, if a 25-year-old user scores an age equivalent score of 30, it means they performed at the level of an average 30-year-old.
// - Grade Equivalent Score: Similar to age equivalent scores, grade equivalent scores compare a user's performance to that of students in different grades. For example, a grade equivalent score of 8.5 means the user performed at the level of an average 8th grader in the fifth month of the school year.
// - Standard Deviation: The standard deviation of scores provides information about the spread of scores in the sample. A higher standard deviation indicates greater variability in performance.
// - Reliability: Reliability measures the consistency and stability of the test results. A reliable test should yield similar scores if the test is taken multiple times by the same person.
// - Validity: Validity refers to the extent to which the GIA test measures what it is intended to measure, i.e., general intelligence or cognitive abilities.
// - Remember that interpreting cognitive test scores requires a comprehensive understanding of psychometrics and statistical analysis. If you are using a standardized GIA test, the test provider should provide guidelines on how to interpret the scores correctly. It's essential to consider these metrics in conjunction with other relevant factors and not make absolute judgments based solely on test scores.
