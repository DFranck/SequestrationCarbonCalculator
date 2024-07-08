import { FormType } from "./CarbonSequestrationCalculation";

const CalculationDetails = ({
  totalSequestration,
  chartData,
  waterDeficit,
}: {
  totalSequestration: number;
  chartData: FormType[];
  waterDeficit: boolean;
}) => {
  return (
    <div>
      {totalSequestration > 0 && (
        <>
          {chartData.map((data) => (
            <div key={data.species} className="flex flex-col gap-2 p-2">
              <h3>
                {data.species}{" "}
                <span className="text-muted-foreground italic text-sm">
                  Un {data.species} peut séquestrer jusque{" "}
                  {data.maxSequestration.toFixed(2)} kg de CO<sub>2</sub>.
                </span>
              </h3>
              <ul className="list-disc">
                {data.individual.map((form: FormType, index: number) => (
                  <li key={form.id} className="ml-4">
                    {parseInt(form.quantity, 10) > 1
                      ? `Le groupe de ${form.species}`
                      : `Le ${form.species}`}{" "}
                    numéro {index + 1} a approximativement {form.age} ans, a
                    déjà séquestré{" "}
                    {waterDeficit
                      ? (Number(form.carbonSequestration) * 0.8).toFixed(0)
                      : Number(form.carbonSequestration).toFixed(0)}
                    kg de CO
                    <sub>2</sub> et peut encore séquestrer{" "}
                    {(
                      data.maxSequestration -
                      (waterDeficit
                        ? Number(form.carbonSequestration) * 0.8
                        : Number(form.carbonSequestration))
                    ).toFixed(0)}
                    kg de CO<sub>2</sub>.
                  </li>
                ))}
              </ul>
              <p>
                <b>
                  Total de séquestration : {data.totalSequestration.toFixed(0)}{" "}
                  kg de CO<sub>2</sub>
                </b>
              </p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default CalculationDetails;
