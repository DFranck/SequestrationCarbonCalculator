// Chemin du fichier: /src/utils/calculation-functions/handling.ts
import { FormType } from "@/features/home/CarbonSequestrationCalculation";
export const handleAddForm = (
  setForms: React.Dispatch<React.SetStateAction<FormType[]>>,
  forms: FormType[]
) => {
  const newForm: FormType = {
    id: forms.length + 1,
    species: "",
    circumference: "",
    height: "",
    quantity: "1",
  };
  setForms([...forms, newForm]);
};

export const handleDeleteForm = (
  id: number,
  setForms: React.Dispatch<React.SetStateAction<FormType[]>>,
  forms: FormType[]
) => {
  setForms(forms.filter((form) => form.id !== id));
};

export const handleFormChange = (
  id: number,
  field: string,
  value: string,
  setForms: React.Dispatch<React.SetStateAction<FormType[]>>,
  forms: FormType[]
) => {
  const updatedForms = forms.map((form) =>
    form.id === id ? { ...form, [field]: value } : form
  );
  setForms(updatedForms);
};

export const handleValidateForm = (
  id: number,
  forms: FormType[],
  setForms: React.Dispatch<React.SetStateAction<FormType[]>>,
  setValidatedForms: React.Dispatch<React.SetStateAction<number[]>>,
  calculateCarbonSequestration: (
    species: string,
    circumference: number,
    height: number,
    zipcode: number
  ) => number,
  calculateTreeAge: (species: string, circumference: number) => number,
  calculatePhotosynthesisConsumption: (
    sunHours: number,
    height: number,
    radius: number
  ) => number,
  zipCode: number
) => {
  console.log("handleValidateForm entries:", "id:", id, "forms:", forms);

  const form = forms.find((form) => form.id === id);
  if (!form) return;
  const updatedForm = {
    ...form,
    age: calculateTreeAge(form.species, Number(form.circumference)),
    carbonSequestration: calculateCarbonSequestration(
      form.species,
      Number(form.circumference),
      Number(form.height),
      zipCode
    ),
    photosynthesisConsumption: calculatePhotosynthesisConsumption(
      zipCode,
      Number(form.height),
      Number(form.circumference) / (2 * Math.PI)
    ),
  };

  setForms(forms.map((f) => (f.id === id ? updatedForm : f)));
  setValidatedForms((prev) => [...prev, id]);
};

export const handleModifForm = (
  id: number,
  setValidatedForms: React.Dispatch<React.SetStateAction<number[]>>,
  validatedForms: number[]
) => {
  setValidatedForms(validatedForms.filter((formId) => formId !== id));
};
