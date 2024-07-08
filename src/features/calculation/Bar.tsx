"use client";
import { Tooltip } from "@/components/Tooltip";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { FormType } from "./CarbonSequestrationCalculation";

export const BarChart = ({
  forms,
  h,
  w,
  className,
  waterDeficit,
}: {
  forms: FormType[];
  h?: string;
  w?: string;
  className?: string;
  waterDeficit: boolean;
}) => {
  const maxValue: { [key: string]: number } = {
    Chêne: 476,
    Hêtre: 750,
    Sapin: 800,
    Pin: 680,
  };
  const [tooltip, setTooltip] = useState({
    visible: false,
    content: "",
    position: { x: 0, y: 0 },
  });
  const uniqueSpecies = Array.from(new Set(forms.map((form) => form.species)));
  const maxHeight = Math.max(...Object.values(maxValue));
  const handleMouseEnter = (event: any, form: FormType) => {
    setTooltip({
      visible: true,
      content: `${form.quantity > "1" ? "Groupe" : "Arbre"}: ${
        form.id
      },<br/> Carbon: ${(form.carbonSequestration ?? 0).toFixed(0)}kg`,
      position: { x: event.clientX + 10, y: event.clientY + 10 },
    });
  };

  const handleMouseLeave = () => {
    setTooltip({
      visible: false,
      content: "",
      position: { x: 0, y: 0 },
    });
  };
  return (
    <div
      className={cn(
        `p-4 bg-card border shadow`,
        h ? `h-${h}` : `h-full`,
        w ? `w-${w}` : `w-full`,
        className
      )}
    >
      <Tooltip
        visible={tooltip.visible}
        content={tooltip.content}
        position={tooltip.position}
      />
      <div
        className="grid gap-4 items-end h-full"
        style={{
          gridTemplateColumns: `repeat(${uniqueSpecies.length}, minmax(0, 1fr))`,
        }}
      >
        {uniqueSpecies.map((species) => {
          const heightValue = maxValue[species] || 0;
          const heightPercentage = (heightValue / maxHeight) * 100;
          const speciesForms = forms.filter((form) => form.species === species);
          return (
            <div key={species} className="h-full flex flex-col justify-between">
              <div>
                <h2 className="w-full text-center">{species}s</h2>
                <p className="w-full text-center mb-2">Max {heightValue} kg</p>
              </div>
              <div
                className={cn(`border col-span-1 w-full grid`, {
                  "bg-red-500/20": species === "Chêne",
                  "bg-yellow-500/20": species === "Hêtre",
                  "bg-green-500/20": species === "Sapin",
                  "bg-blue-500/20": species === "Pin",
                })}
                style={{
                  height: `${heightPercentage}%`,
                  gridTemplateColumns: `repeat(${speciesForms.length}, minmax(0, 1fr))`,
                }}
              >
                {speciesForms.map((form, index) => {
                  const formHeightPercentage =
                    ((form.carbonSequestration ?? 0) * 100) / heightValue;
                  return (
                    <div
                      key={index}
                      className="w-full flex flex-col h-full justify-end text-center "
                    >
                      <p>{form.id ?? 0}</p>
                      <div
                        key={index}
                        className={cn("text-center border w-full", {
                          "bg-red-500": species === "Chêne",
                          "bg-yellow-500": species === "Hêtre",
                          "bg-green-500": species === "Sapin",
                          "bg-blue-500": species === "Pin",
                        })}
                        onMouseEnter={(event) => handleMouseEnter(event, form)}
                        onMouseLeave={handleMouseLeave}
                        style={{ height: `${formHeightPercentage}%` }}
                      ></div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
