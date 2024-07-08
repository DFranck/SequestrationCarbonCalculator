import {
  Calculator,
  DraftingCompass,
  Ruler,
  Sun,
  TreePine,
} from "lucide-react";

const FormHeader = () => {
  return (
    <>
      <h2>Pret à calculer votre empreinte carbone positive?</h2>
      <p className="mb-10">
        Afin de calculer votre empreinte carbone, veuillez remplir le formulaire
        ci-dessous :
      </p>
      <ul className="grid grid-cols-5 gap-4 px-5 mb-5">
        <li className="flex gap-2">
          {/* <Pin /> */}
          <Sun />
          Code postal*
        </li>
        <li className="flex gap-2">
          <TreePine />
          Especes*
        </li>
        <li className="flex gap-2">
          <DraftingCompass />
          Circonferences*
        </li>
        <li className="flex gap-2">
          <Ruler />
          Hauters*
        </li>

        <li className="flex gap-2">
          <Calculator />
          Quantitées
        </li>
      </ul>
    </>
  );
};

export default FormHeader;
