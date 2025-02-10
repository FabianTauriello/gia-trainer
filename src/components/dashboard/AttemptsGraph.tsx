import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarElement,
  CategoryScale,
  ChartData,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { useGetAllQuizAttemptsQuery } from "domain/slices/apislice";
import { QuizAttempt } from "domain/types";
import { useAppSelector } from "hooks/useAppSelector";
import { useState } from "react";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Attempts over time",
      position: "bottom",
    },
  },
};

const timeRanges = [
  { label: "Last 30 Days", value: 30 },
  { label: "All Time", value: Infinity },
];

function filterAttempts(attempts: QuizAttempt[], selectedRange: number) {
  return [];
}

function getLast30DaysLabels(): string[] {
  const labels: string[] = [];
  const now = new Date();

  for (let i = 0; i < 30; i++) {
    const date = new Date(now);
    date.setDate(now.getDate() - i);
    const options: Intl.DateTimeFormatOptions = { month: "short", day: "numeric" };
    labels.push(date.toLocaleDateString(undefined, options));
  }

  return labels.reverse(); // Reverse to have the oldest date first
}

/* Line graph showing all scores over various times */
function AttemptsGraph() {
  const { auth } = useAppSelector((state) => state);
  const { data: quizAttempts, isError, isLoading, isFetching, refetch, isSuccess } = useGetAllQuizAttemptsQuery(auth.user!.id);

  const [timeRange, setTimeRange] = useState(timeRanges[timeRanges.length - 1]);

  const filteredAttempts = filterAttempts(quizAttempts?.data || [], timeRange.value);

  const chartData: ChartData = {
    labels: getLast30DaysLabels(),
    datasets: [
      {
        label: "Score",
        data: [],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  // const chartData = {
  //   labels: ["January", "February", "March", "April", "May", "July"],
  //   datasets: [
  //     {
  //       label: "Dataset 1",
  //       data: [6, 2, 3, 4, 1, 6, 7],
  //       borderColor: "rgb(255, 99, 132)",
  //       backgroundColor: "rgba(255, 99, 132, 0.5)",
  //     },
  //   ],
  // };

  function handleTimeRangeChange(value: string) {
    const timeRangeFound = timeRanges.find((range) => range.label === value)!;
    setTimeRange(timeRangeFound);
  }

  return (
    <>
      <Tabs defaultValue={timeRanges[0].label} className="mb-4" onValueChange={(value) => handleTimeRangeChange(value)}>
        <TabsList className="w-full">
          {timeRanges.map((timeRange) => (
            <TabsTrigger key={timeRange.label} className="flex-1" value={timeRange.label}>
              {timeRange.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      <Line options={options} data={chartData} />
    </>
  );
}

export default AttemptsGraph;

// export const data = {
//   labels: ["January", "February", "March", "April", "May", "June", "July"],
//   datasets: [
//     {
//       label: "Dataset 1",
//       data: [6, 2, 3, 4, 1, 6, 7],
//       borderColor: "rgb(255, 99, 132)",
//       backgroundColor: "rgba(255, 99, 132, 0.5)",
//     },
//   ],
// };
