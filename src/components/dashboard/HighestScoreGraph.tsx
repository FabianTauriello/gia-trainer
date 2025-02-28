import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartOptions } from "chart.js";
import "chartjs-adapter-date-fns"; // TODO need this?
import { isAfter, startOfDay, subDays, format } from "date-fns";
import { useGetAllQuizAttemptsQuery } from "domain/slices/apislice";
import { DataPoint, QuizAttempt, TimeRange } from "domain/types";
import { useAppSelector } from "hooks/useAppSelector";
import { useEffect, useMemo, useState } from "react";
import { Scatter } from "react-chartjs-2";
import TimeRangeTabs from "./TimeRangeTabs";
import { Utils } from "utils/Utils";

function HighestScoreGraph() {
  const { auth } = useAppSelector((state) => state);
  const { data: quizAttempts, isError } = useGetAllQuizAttemptsQuery(auth.user!.id);

  const [timeRange, setTimeRange] = useState<TimeRange>({ label: "Last 30 Days", value: 30 });
  const [options, setOptions] = useState<ChartOptions<"scatter">>(generateChartOptions(timeRange));

  const scatterData = useMemo(() => generateData(quizAttempts?.data || [], timeRange), [quizAttempts, timeRange]);

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
        <Scatter
          className="rounded-md border border-slate-300 dark:border-slate-700 px-2 pb-2"
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
        ></Scatter>
      </div>
    </div>
  );
}

function generateData(attempts: QuizAttempt[], timeRange: TimeRange): DataPoint[] {
  const scoresMap: { [date: string]: number } = {};

  attempts.forEach((attempt) => {
    const attemptDate = new Date(attempt.timestamp);

    // ignore dates outside of set time range
    if (timeRange.value === 30 && !Utils.isWithinPeriod(attemptDate, 30)) return;
    if (timeRange.value === 90 && !Utils.isWithinPeriod(attemptDate, 90)) return;

    const dateKey = attemptDate.toISOString().split("T")[0];

    if (!scoresMap[dateKey] || scoresMap[dateKey] < attempt.totalScore) {
      scoresMap[dateKey] = attempt.totalScore;
    }
  });

  // Convert to chart-friendly format
  return Object.keys(scoresMap).map((dateKey) => ({
    x: new Date(dateKey),
    y: scoresMap[dateKey].toString(),
  }));
}

function generateChartOptions(timeRange: TimeRange): ChartOptions<"scatter"> {
  return {
    responsive: true,
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
      title: {
        display: true,
        text: "Highest Score Per Day",
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
        min: 0,
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

export default HighestScoreGraph;
