import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
  ChartOptions,
} from "chart.js";
import "chartjs-adapter-date-fns";
import { useEffect, useMemo, useState } from "react";
import { useGetAllQuizAttemptsQuery } from "domain/slices/apislice";
import { useAppSelector } from "hooks/useAppSelector";
import { DataPoint, QuizAttempt, TimeRange } from "domain/types";
import TimeRangeTabs from "./TimeRangeTabs";
import { Utils } from "utils/Utils";
import { format } from "date-fns";

const timeRanges: TimeRange[] = [
  { label: "Last 30 Days", value: 30 },
  { label: "Last 90 Days", value: 90 },
  { label: "All Time", value: Infinity },
];

function AverageScoreGraph() {
  const { auth } = useAppSelector((state) => state);
  const { data: quizAttempts, isError } = useGetAllQuizAttemptsQuery(auth.user!.id);

  const [timeRange, setTimeRange] = useState<TimeRange>({ label: "Last 30 Days", value: 30 });
  const [options, setOptions] = useState<ChartOptions<"line">>(generateChartOptions(timeRange));

  const dailyAverages = useMemo(() => generateData(quizAttempts?.data || [], timeRange), [quizAttempts, timeRange]);

  useEffect(() => {
    setOptions(generateChartOptions(timeRange));
  }, [timeRange]);

  return (
    <div>
      <TimeRangeTabs handleChange={(newTimeRange) => setTimeRange(newTimeRange)} />
      <div className="relative">
        {isError && (
          <div className="absolute inset-0 rounded-md bg-opacity-50 bg-red-800 text-white flex items-center justify-center z-10">
            <div className="text-center">
              <div>Error fetching this data.</div>
              <div>Please try again later.</div>
            </div>
          </div>
        )}
        <Line
          className="rounded-md border border-slate-300 dark:border-slate-700 px-2 pb-2"
          data={{
            datasets: [
              {
                data: dailyAverages,
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                tension: 0.3, // Smooth curve
                fill: true,
              },
            ],
          }}
          options={options}
        />
      </div>
    </div>
  );
}

// Helper: Calculate average scores per day
function generateData(attempts: QuizAttempt[], timeRange: TimeRange): DataPoint[] {
  const scoresMap: { [date: string]: { totalScore: number; count: number } } = {};

  attempts.forEach((attempt) => {
    const attemptDate = new Date(attempt.timestamp);

    // ignore dates outside of set time range
    if (timeRange.value === 30 && !Utils.isWithinPeriod(attemptDate, 30)) return;
    if (timeRange.value === 90 && !Utils.isWithinPeriod(attemptDate, 90)) return;

    const dateKey = attemptDate.toISOString().split("T")[0];
    if (!scoresMap[dateKey]) {
      scoresMap[dateKey] = { totalScore: 0, count: 0 };
    }
    scoresMap[dateKey].totalScore += attempt.totalScore;
    scoresMap[dateKey].count += 1;
  });

  // Convert to chart-friendly format
  return Object.keys(scoresMap)
    .map((date) => ({
      x: new Date(date),
      y: (scoresMap[date].totalScore / scoresMap[date].count).toFixed(2), // calculate average score for day
    }))
    .sort((a, b) => a.x.getTime() - b.x.getTime());
}

function generateChartOptions(timeRange: TimeRange): ChartOptions<"line"> {
  return {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Average Quiz Score",
        position: "top",
        padding: {
          top: 14,
          bottom: 14,
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const pointData = context.raw as DataPoint;
            return `Score: ${pointData.y}, Date: ${format(pointData.x, "d MMM yyyy")}`;
          },
          title: () => {
            return "Average score for day";
          },
        },
      },
    },
    scales: {
      x: {
        type: timeRange.value === 30 ? "time" : "timeseries",
        time: {
          unit: "day",
          displayFormats: {
            day: "MMM d",
          },
        },
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Score",
        },
        ticks: {
          stepSize: 1,
        },
      },
    },
  };
}
export default AverageScoreGraph;
