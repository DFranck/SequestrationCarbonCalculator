import { FormType } from "@/features/home/CarbonSequestrationCalculation";

export const isFormComplete = (form: FormType) => {
  return (
    form.species.trim() !== "" &&
    !isNaN(parseFloat(form.circumference)) &&
    parseFloat(form.circumference) > 0 &&
    !isNaN(parseFloat(form.height)) &&
    parseFloat(form.height) > 0 &&
    !isNaN(parseFloat(form.quantity)) &&
    parseFloat(form.quantity) > 0
  );
};
