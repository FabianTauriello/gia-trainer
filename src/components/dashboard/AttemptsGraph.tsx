import { ChartOptions } from "chart.js";
import { useAppSelector } from "hooks/useAppSelector";
import { Line } from "react-chartjs-2";

const options: ChartOptions<"line"> = {
  responsive: true,
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
  },
};

function AttemptsGraph() {
  return (
    <div>
      <Line
        options={options}
        data={{
          datasets: [
            {
              label: "Highest Score",
              data: [],
              backgroundColor: "rgba(255, 99, 132, 1)",
            },
          ],
        }}
      />
    </div>
  );
}

export default AttemptsGraph;
