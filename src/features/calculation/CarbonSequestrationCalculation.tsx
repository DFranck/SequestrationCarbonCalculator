// Chemin du fichier: /src/pages/CarbonSequestrationCalculation.tsx

"use client";

import Section from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  calculateCarbonSequestration,
  calculatePhotosynthesisConsumption,
  calculateTreeAge,
} from "@/utils/calculation-functions/calculations";
import {
  handleAddForm,
  handleDeleteForm,
  handleFormChange,
  handleModifForm,
  handleValidateForm,
} from "@/utils/calculation-functions/handling";
import { useState } from "react";
import Dashboard from "./Dashboard";
import FormHeader from "./FormHeader";
import TreeForm from "./TreeForm";

export interface FormType {
  id: number;
  species: string;
  circumference: string;
  height: string;
  quantity: string;
  age?: number | null;
  carbonSequestration?: number;
  photosynthesisConsumption?: number;
  zipcode?: number;
}

const CarbonSequestrationCalculation = () => {
  const [zipCode, setZipCode] = useState(0);
  const [validatedForms, setValidatedForms] = useState<number[]>([]);
  const [forms, setForms] = useState<FormType[]>([
    { id: 1, species: "", circumference: "", height: "", quantity: "1" },
  ]);
  const [waterDeficit, setWaterDeficit] = useState(false);
  const handleValidateFormLocal = (id: number) => {
    handleValidateForm(
      id,
      forms,
      setForms,
      setValidatedForms,
      calculateCarbonSequestration,
      calculateTreeAge,
      calculatePhotosynthesisConsumption,
      zipCode
    );
  };

  return (
    <Section className="max-w-7xl px-5">
      <div className="w-full">
        <FormHeader />
        <div
          className={cn(
            "flex flex-col gap-4 bg-card border shadow p-5 relative"
          )}
        >
          {forms.map((form) => (
            <TreeForm
              key={form.id}
              zipCode={zipCode}
              setZipCode={setZipCode}
              form={form}
              handleDeleteForm={(id) => handleDeleteForm(id, setForms, forms)}
              handleFormChange={(id, field, value) =>
                handleFormChange(id, field, value, setForms, forms)
              }
              validatedForms={validatedForms}
              handleValidateForm={handleValidateFormLocal}
              handleModifForm={(id) =>
                handleModifForm(id, setValidatedForms, validatedForms)
              }
              forms={forms}
            />
          ))}

          <div className=" flex gap-2 mt-6 justify-between">
            <span className="text-muted-foreground italic flex items-center gap-2">
              S&apos;il y a eu une période de sécheresse, cochez cette case:
              <input
                type="checkbox"
                id="waterDeficit"
                name="waterDeficit"
                onChange={(e) => setWaterDeficit(e.target.checked)}
                className="w-4 h-4"
              />
            </span>
            <Button
              className=""
              type="button"
              variant={"outline"}
              onClick={() => handleAddForm(setForms, forms)}
            >
              Ajouter
            </Button>
          </div>
        </div>
        {forms && (
          <div className="border shadow mt-5">
            <Dashboard forms={forms} waterDeficit={waterDeficit} />
          </div>
        )}
      </div>
    </Section>
  );
};

export default CarbonSequestrationCalculation;
