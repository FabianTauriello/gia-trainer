import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CategoryScale,
  Chart as ChartJS,
  ChartOptions,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  TimeScale,
  Title,
  Tooltip,
  LogarithmicScale,
  TimeSeriesScale,
} from "chart.js";
import "chartjs-adapter-date-fns"; // TODO need this?
import { isAfter, startOfDay, subDays } from "date-fns";
import { useGetAllQuizAttemptsQuery } from "domain/slices/apislice";
import { QuizAttempt, TimeRange } from "domain/types";
import { useAppSelector } from "hooks/useAppSelector";
import { useEffect, useMemo, useState } from "react";
import { Scatter } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
  LogarithmicScale,
  TimeSeriesScale
);

type TimeRange = {
  label: string;
  value: number;
};

type DataPoint = {
  x: Date;
  y: number;
};

const timeRanges: TimeRange[] = [
  { label: "Last 30 Days", value: 30 },
  { label: "Last 90 Days", value: 90 },
  { label: "All Time", value: Infinity },
];

function HighestScoreGraph() {
  const { auth } = useAppSelector((state) => state);
  const { data: quizAttempts, isError, isLoading, isFetching, refetch, isSuccess } = useGetAllQuizAttemptsQuery(auth.user!.id);

  const [timeRange, setTimeRange] = useState<TimeRange>(timeRanges[0]);
  const [options, setOptions] = useState<ChartOptions<"scatter">>(generateChartOptions(timeRange));

  const scatterData = useMemo(() => generateScatterData(quizAttempts?.data || [], timeRange), [quizAttempts, timeRange]);

  useEffect(() => {
    setOptions(generateChartOptions(timeRange));
  }, [timeRange]);

  function handleTimeRangeChange(value: string) {
    const timeRangeFound = timeRanges.find((range) => range.label === value)!;
    setTimeRange(timeRangeFound);
  }

  return (
    <div>
      <Tabs defaultValue={timeRanges[0].label} className="mb-4" onValueChange={(value) => handleTimeRangeChange(value)}>
        <TabsList className="w-full">
          {timeRanges.map((timeRange) => (
            <TabsTrigger key={timeRange.label} className="flex-1" value={timeRange.label}>
              {timeRange.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      <Scatter
        options={options}
        data={{
          datasets: [
            {
              label: "Highest Score",
              data: scatterData,
              backgroundColor: "rgba(255, 99, 132, 1)",
            },
          ],
        }}
      />
    </div>
  );
}

function generateScatterData(attempts: QuizAttempt[], timeRange: TimeRange): DataPoint[] {
  const scoresMap: { [date: string]: number } = {};

  attempts.forEach((attempt) => {
    const attemptDate = new Date(attempt.timestamp);

    // ignore dates outside of set time range
    if (timeRange.value === 30 && !isWithinPeriod(attemptDate, 30)) return;
    if (timeRange.value === 90 && !isWithinPeriod(attemptDate, 90)) return;

    const dateKey = attemptDate.toISOString().split("T")[0]; // format as YYYY-MM-DD

    if (!scoresMap[dateKey] || scoresMap[dateKey] < attempt.totalScore) {
      scoresMap[dateKey] = attempt.totalScore;
    }
  });

  return Object.keys(scoresMap).map((dateKey) => ({
    x: new Date(dateKey),
    y: scoresMap[dateKey],
  }));
}

function isWithinPeriod(date: Date, dayCount: number): boolean {
  const today = new Date();
  const thirtyDaysAgo = subDays(today, dayCount);
  return isAfter(startOfDay(date), startOfDay(thirtyDaysAgo));
}

function generateChartOptions(timeRange: TimeRange): ChartOptions<"scatter"> {
  return {
    responsive: true,
    maintainAspectRatio: true,
    animations: {
      y: {
        from: (ctx) => ctx.chart.scales.y.getPixelForValue(0), // Start from the bottom y-value
        type: "number",
        easing: "easeOutQuart",
        duration: 500,
      },
      x: {
        duration: 0, // No x-axis animation
      },
    },
    transitions: {
      active: {
        animation: {
          duration: 1000,
          easing: "linear",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
      title: {
        display: true,
        text: "Highest Scores per Day",
        position: "bottom",
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const pointData = context.raw as DataPoint;
            return `Score: ${pointData.y}`;
          },
        },
      },
    },
    scales: {
      x: {
        position: "bottom",
        type: timeRange.value === 30 ? "time" : "timeseries",
        // time: {
        //   unit: timeRange.value === 30 ? "day" : "year",
        //   displayFormats: {
        //     day: "MMM dd",
        //     month: "yyyy-MM", // Show year and month
        //     year: "yyyy",
        //   },
        // },
        title: {
          display: true,
          text: "Date",
        },
        // ticks: {
        //   source: "auto",
        //   maxRotation: 50,
        //   autoSkip: true,
        //   stepSize: 1,
        // },
      },
      y: {
        title: {
          display: true,
          text: "Score",
        },
        min: 0,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };
}

export default HighestScoreGraph;
