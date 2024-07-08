// Fichier: components/SpeciesSequestrationLineChart.tsx

import { speciesPhotosynthesis } from "@/data/speciesPhotosynthesis"; // Importation des données de photosynthèse
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Scatter,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"; // Importation des composants de Recharts
import { FormType } from "./CarbonSequestrationCalculation"; // Importation du type FormType

const COLORS = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00"]; // Définition des couleurs

// Fonction pour interpoler les valeurs manquantes
const interpolatePhotosynthesis = (
  data: { age: number; photosynthesis: number }[]
) => {
  const interpolatedData: { age: number; photosynthesis: number }[] = [];
  for (let age = 1; age <= 50; age++) {
    const previous = data.find(
      (d, index) =>
        d.age <= age && (data[index + 1]?.age > age || !data[index + 1])
    );
    const next = data.find((d) => d.age >= age);

    if (previous && next) {
      if (previous.age === next.age) {
        interpolatedData.push({ age, photosynthesis: previous.photosynthesis });
      } else {
        const ratio = (age - previous.age) / (next.age - previous.age);
        interpolatedData.push({
          age,
          photosynthesis:
            previous.photosynthesis +
            ratio * (next.photosynthesis - previous.photosynthesis),
        });
      }
    } else if (previous) {
      interpolatedData.push({ age, photosynthesis: previous.photosynthesis });
    }
  }
  return interpolatedData;
};

const SpeciesSequestrationLineChart = ({ forms }: { forms: FormType[] }) => {
  const speciesData: { year: number; [key: string]: number }[] = [];
  const scatterData: {
    age: number;
    species: string;
    photosynthesis: number;
  }[] = [];
  const years = 100;
  const photosynthesis = speciesPhotosynthesis;

  // Initialiser la structure des données pour chaque année
  for (let year = 1; year <= years; year++) {
    speciesData.push({ year });
  }

  // Transformer les données de photosynthèse pour chaque espèce dans les forms
  const uniqueSpecies = Array.from(new Set(forms.map((form) => form.species)));

  uniqueSpecies.forEach((species) => {
    const speciesAgeData = photosynthesis[species];
    if (speciesAgeData) {
      const interpolated = interpolatePhotosynthesis(speciesAgeData); // Appel de la fonction d'interpolation
      interpolated.forEach((data) => {
        const yearData = speciesData.find((d) => d.year === data.age);
        if (yearData) {
          yearData[species] = data.photosynthesis;
        }
        // Ajouter les points spécifiques à scatterData
        scatterData.push({
          age: data.age,
          species,
          photosynthesis: data.photosynthesis,
        });
      });
    }
  });

  const formScatterData = forms.map((form) => ({
    age: form.age,
    carbonSequestration: form.carbonSequestration,
    species: form.species,
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={speciesData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis domain={[0, "auto"]} /> {/* Ajuster le domaine de l'axe Y */}
        <Tooltip />
        <Legend />
        {uniqueSpecies.map((species, index) => (
          <Line
            key={species}
            type="monotone"
            dataKey={species}
            stroke={COLORS[index % COLORS.length]}
            dot={false}
          />
        ))}
        {uniqueSpecies.map((species, index) => (
          <Scatter
            key={`scatter-${species}`}
            data={scatterData.filter((d) => d.species === species)}
            fill={COLORS[index % COLORS.length]}
          />
        ))}
        <Scatter
          name="Forms Data"
          data={formScatterData}
          fill="#FF00FF"
          shape="circle"
          dataKey="carbonSequestration"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SpeciesSequestrationLineChart;
