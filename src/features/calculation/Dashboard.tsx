// Fichier: components/Dashboard.tsx

import { speciesCarbonSequestration } from "@/data/speciesCarbonSequestration";
import { useEffect, useState } from "react";
import { BarChart } from "./Bar";
import CalculationDetails from "./CalculationDetails";
import { FormType } from "./CarbonSequestrationCalculation";

const Dashboard = ({
  forms,
  waterDeficit,
}: {
  forms: FormType[];
  waterDeficit: boolean;
}) => {
  const [chartData, setChartData] = useState<any[]>([]);
  const [totalSequestration, setTotalSequestration] = useState(0);

  useEffect(() => {
    const speciesInfo: { [key: string]: any } = {};
    let totalSequestrationCumulative = 0;

    forms.forEach((form) => {
      if (!speciesCarbonSequestration[form.species]) {
        console.error(`Espèce non trouvée: ${form.species}`);
        return;
      }

      if (!speciesInfo[form.species]) {
        speciesInfo[form.species] = {
          totalSequestration: 0,
          totalQuantity: 0,
          individual: [],
          maxSequestration: Math.max(
            ...speciesCarbonSequestration[form.species].map(
              (data) => data.carbone
            )
          ),
        };
      }

      const individualSequestration = form.carbonSequestration || 0;
      const adjustedSequestration = waterDeficit
        ? individualSequestration * 0.8
        : individualSequestration;

      speciesInfo[form.species].totalSequestration +=
        adjustedSequestration * parseInt(form.quantity, 10);
      speciesInfo[form.species].totalQuantity += parseInt(form.quantity, 10);
      speciesInfo[form.species].individual.push({
        ...form,
        adjustedSequestration,
      });

      totalSequestrationCumulative +=
        adjustedSequestration * parseInt(form.quantity, 10);
    });

    const data = Object.keys(speciesInfo).map((species) => ({
      species,
      totalSequestration: speciesInfo[species].totalSequestration,
      maxSequestration: speciesInfo[species].maxSequestration,
      individual: speciesInfo[species].individual,
    }));

    setChartData(data);
    setTotalSequestration(totalSequestrationCumulative);
  }, [forms, waterDeficit]);

  return (
    <div className="p-4">
      <h2>Résultat de votre Calcul de Séquestration du Carbone :</h2>
      <div className="flex flex-col items-center gap-4 p-10 bg-primary text-primary-foreground w-fit mx-auto my-10 rounded shadow">
        {/* <h3 className="font-bold">Total Cumulé de Séquestration du Carbone</h3> */}
        <p className="text-2xl font-bold">
          Total de séquestration : {totalSequestration.toFixed(0)} kg de CO
          <sub>2</sub>
        </p>
      </div>
      <div>
        <p>
          C&apos;est impressionnant, n&apos;est-ce pas ? Mais qu&apos;est-ce que
          cela signifie réellement ?
        </p>
        <p className="my-5">
          En moyenne, la plupart des estimations considèrent qu&apos;un arbre
          stocke entre{" "}
          <b>
            10 et 50 kg de CO2 par an avec un pic atteint à l&apos;age de 30 ans
          </b>
          . <br /> Il reste à noter qu&apos;en moyenne la majorité des essences
          stockent entre 20-30 kg par an pour la plupart des arbres communs.
        </p>
      </div>
      <div className="hidden">
        <CalculationDetails
          totalSequestration={totalSequestration}
          chartData={chartData}
          waterDeficit={waterDeficit}
        />
      </div>
      <div className="aspect-square grid grid-cols-2 w-1/2 ">
        {/* <LineGraph forms={forms} /> */}
        <BarChart
          forms={forms}
          className="col-span-2"
          waterDeficit={waterDeficit}
        />
        {/* <SpeciesSequestrationLineChart forms={forms} /> */}
      </div>
    </div>
  );
};

export default Dashboard;
