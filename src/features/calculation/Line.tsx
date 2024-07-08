import { lineChartCheneData } from "@/data/speciesPhotosynthesis";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { FormType } from "./CarbonSequestrationCalculation";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export const LineGraph = ({ forms }: { forms: FormType[] }) => {
  console.log(forms.map((form) => form.species));

  const option = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Photosynthèse net",
      },
    },
  };

  return <Line options={option} data={lineChartCheneData} />;
};
