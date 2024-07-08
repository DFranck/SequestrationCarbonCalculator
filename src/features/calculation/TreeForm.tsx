// Chemin du fichier: /src/components/TreeForm.tsx

import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import { FormType } from "./CarbonSequestrationCalculation";

const TreeForm = ({
  form,
  handleDeleteForm,
  handleFormChange,
  validatedForms,
  handleValidateForm,
  handleModifForm,
  forms,
  key,
  zipCode,
  setZipCode,
}: {
  form: FormType;
  handleDeleteForm: (id: number) => void;
  handleFormChange: (id: number, field: string, value: string) => void;
  validatedForms: number[];
  handleValidateForm: (id: number) => void;
  handleModifForm: (id: number) => void;
  forms: FormType[];
  key: number;
  zipCode: number;
  setZipCode: (value: number) => void;
}) => {
  const isLastForm = forms.length === 1;
  const isValidated = validatedForms.includes(form.id);

  return (
    <div key={key} className="grid grid-cols-5 gap-4">
      <input
        className="px-2 py-1 border rounded shadow text-muted-foreground"
        type="number"
        placeholder="Code postal"
        min={0}
        value={zipCode ? zipCode : form.zipcode}
        onChange={(e) =>
          setZipCode
            ? setZipCode(Number(e.target.value))
            : handleFormChange(form.id, "zipcode", e.target.value)
        }
        disabled={isValidated}
      />
      <select
        name="species"
        id="species"
        className="px-2 py-1 border rounded shadow text-muted-foreground"
        value={form.species}
        onChange={(e) => handleFormChange(form.id, "species", e.target.value)}
        disabled={isValidated}
      >
        <option value="">Espèces</option>
        <option value="Chêne">Chêne</option>
        <option value="Hêtre">Hêtre</option>
        <option value="Pin">Pin</option>
        <option value="Sapin">Sapin</option>
      </select>
      <input
        className="px-2 py-1 border rounded shadow text-muted-foreground"
        type="number"
        placeholder="Circonférence (cm)"
        min={0}
        value={form.circumference}
        onChange={(e) =>
          handleFormChange(form.id, "circumference", e.target.value)
        }
        disabled={isValidated}
      />
      <input
        className="px-2 py-1 border rounded shadow text-muted-foreground"
        type="number"
        placeholder="Hauteur (m)"
        min={0}
        value={form.height}
        onChange={(e) => handleFormChange(form.id, "height", e.target.value)}
        disabled={isValidated}
      />
      <div className="grid grid-cols-2 gap-4">
        <input
          type="number"
          className="px-2 py-1 border rounded shadow text-muted-foreground"
          placeholder="Quantité"
          min={1}
          value={form.quantity}
          onChange={(e) =>
            handleFormChange(form.id, "quantity", e.target.value)
          }
          disabled={isValidated}
        />
        {isValidated ? (
          <>
            <Button variant={"ghost"} onClick={() => handleModifForm(form.id)}>
              <Pencil className="w-full h-full" />
            </Button>
            {/* <Button
                type="button"
                variant={"outline"}
                onClick={() => handleDeleteForm(form.id)}
              >
                <Cross2Icon className="h-6 w-6" />
              </Button> */}
          </>
        ) : (
          <div className="gap-2 flex">
            <Button
              className={isLastForm ? "col-span-2" : ""}
              type="button"
              onClick={() => handleValidateForm(form.id)}
            >
              {/* <Check className="w-full" /> */}
              Calculer
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TreeForm;
