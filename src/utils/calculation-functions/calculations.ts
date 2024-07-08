// Chemin du fichier: /src/utils/calculation-functions/calculations.ts

import { speciesCarbonSequestration } from "@/data/speciesCarbonSequestration";
import { speciesConversionFactors } from "@/data/speciesConversionFactors";
import { sunlightHours } from "@/data/sunlightHours";

export function getSunlightHours(postalCode: string): number {
  const entry = Object.values(sunlightHours).find(
    (item) => item.postalCode === postalCode
  );
  console.log(entry?.sunHours);
  return entry ? entry.sunHours : 0;
}

export function calculateCarbonSequestration(
  species: string,
  circumference: number,
  height: number,
  zipcode: number
): number {
  console.log(
    "calculateCarbonSequestration entries:",
    "species:",
    species,
    "circumference:",
    circumference,
    "height:",
    height,
    "zipcode:",
    zipcode
  );
  const conversionFactor = speciesConversionFactors[species];
  const diameter = circumference / Math.PI;
  const biomass = Math.pow(diameter, 2) * height * conversionFactor; // Exemple d'équation allométrique
  const carbon = biomass * 0.5;
  const sunHours = getSunlightHours(String(zipcode));
  const referenceSunHours = 2000;
  const sunHoursFactor = sunHours / referenceSunHours;
  const adjustedCarbonSequestration = carbon * sunHoursFactor;
  const correctedCarbonSequestration =
    adjustedCarbonSequestration * Math.sqrt(sunHoursFactor);
  console.log(correctedCarbonSequestration);

  return correctedCarbonSequestration;
}

export function calculateTreeAge(
  species: string,
  circumference: number
): number {
  const data = speciesCarbonSequestration[species];
  const closestEntry = data.reduce((prev, curr) =>
    Math.abs(curr.age - circumference) < Math.abs(prev.age - circumference)
      ? curr
      : prev
  );
  console.log("Age:", closestEntry);

  return closestEntry.age;
}

export function calculatePhotosynthesisConsumption(
  sunHours: number,
  height: number,
  radius: number
): number {
  const leafArea = 2 * Math.PI * radius * height * 0.5; // Estimation de la surface foliaire
  const photosynthesisRate = sunHours * 0.0001; // Estimation du taux de photosynthèse par heure d'ensoleillement
  const co2Consumption = leafArea * photosynthesisRate;
  console.log("PhotosynthesisConsumption:", co2Consumption);

  return co2Consumption;
}
