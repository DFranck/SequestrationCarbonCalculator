// Fichier: data/speciesPhotosynthesis.ts

export const lineChartCheneData = {
  labels: [
    1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90,
    95, 100,
  ],
  datasets: [
    {
      label: "Chêne",
      data: [
        5, 25, 60, 100, 140, 170, 200, 180, 160, 140, 120, 110, 100, 90, 80, 70,
        60, 50, 40, 30, 20,
      ],
      borderColor: "#FF0000", // Couleur de la ligne
      backgroundColor: "rgba(255, 0, 0, 0.2)", // Couleur de fond pour les points
      cubicInterpolationMode: "monotone",
    },
    {
      label: "Sapin",
      data: [
        4, 20, 55, 95, 135, 175, 215, 185, 155, 125, 95, 75, 55, 35, 15, 5, 0,
        0, 0, 0, 0,
      ],
      borderColor: "#FF0000", // Couleur de la ligne
      backgroundColor: "rgba(255, 0, 0, 0.2)", // Couleur de fond pour les points
      cubicInterpolationMode: "monotone",
    },
    {
      label: "Hêtre",
      data: [
        6, 30, 75, 125, 175, 225, 275, 250, 225, 200, 170, 150, 130, 110, 90,
        70, 50, 40, 30, 20, 10,
      ],
      borderColor: "#FF0000", // Couleur de la ligne
      backgroundColor: "rgba(255, 0, 0, 0.2)", // Couleur de fond pour les points
      cubicInterpolationMode: "monotone",
    },
    {
      label: "Pin",
      data: [
        5, 25, 60, 100, 140, 170, 200, 180, 160, 140, 120, 110, 100, 90, 80, 70,
        60, 50, 40, 30, 20,
      ],
      borderColor: "#FF0000", // Couleur de la ligne
      backgroundColor: "rgba(255, 0, 0, 0.2)", // Couleur de fond pour les points
      cubicInterpolationMode: "monotone",
    },
  ],
};

// Déclaration d'un objet représentant les données de photosynthèse pour différentes espèces.
export const speciesPhotosynthesis: {
  [key: string]: { age: number; photosynthesis: number }[]; // Déclaration du type de l'objet.
} = {
  Chêne: [
    { age: 1, photosynthesis: 5 }, // Photosynthèse à différents âges pour l'espèce "Chêne".
    { age: 5, photosynthesis: 25 },
    { age: 10, photosynthesis: 60 },
    { age: 15, photosynthesis: 100 },
    { age: 20, photosynthesis: 140 },
    { age: 25, photosynthesis: 170 },
    { age: 30, photosynthesis: 200 },
    { age: 35, photosynthesis: 180 },
    { age: 40, photosynthesis: 160 },
    { age: 45, photosynthesis: 140 },
    { age: 50, photosynthesis: 120 },
    { age: 55, photosynthesis: 110 },
    { age: 60, photosynthesis: 100 },
    { age: 65, photosynthesis: 90 },
    { age: 70, photosynthesis: 80 },
    { age: 75, photosynthesis: 70 },
    { age: 80, photosynthesis: 60 },
  ],
  Hêtre: [
    { age: 1, photosynthesis: 6 }, // Photosynthèse à différents âges pour l'espèce "Hêtre".
    { age: 5, photosynthesis: 30 },
    { age: 10, photosynthesis: 75 },
    { age: 15, photosynthesis: 125 },
    { age: 20, photosynthesis: 175 },
    { age: 25, photosynthesis: 225 },
    { age: 30, photosynthesis: 275 },
    { age: 35, photosynthesis: 250 },
    { age: 40, photosynthesis: 225 },
    { age: 45, photosynthesis: 200 },
    { age: 50, photosynthesis: 175 },
    { age: 55, photosynthesis: 150 },
    { age: 60, photosynthesis: 140 },
    { age: 65, photosynthesis: 130 },
    { age: 70, photosynthesis: 120 },
    { age: 75, photosynthesis: 110 },
    { age: 80, photosynthesis: 100 },
  ],
  Pin: [
    { age: 1, photosynthesis: 4 }, // Photosynthèse à différents âges pour l'espèce "Pin".
    { age: 5, photosynthesis: 20 },
    { age: 10, photosynthesis: 50 },
    { age: 15, photosynthesis: 85 },
    { age: 20, photosynthesis: 120 },
    { age: 25, photosynthesis: 155 },
    { age: 30, photosynthesis: 190 },
    { age: 35, photosynthesis: 180 },
    { age: 40, photosynthesis: 160 },
    { age: 45, photosynthesis: 150 },
    { age: 50, photosynthesis: 140 },
    { age: 55, photosynthesis: 130 },
    { age: 60, photosynthesis: 120 },
    { age: 65, photosynthesis: 110 },
    { age: 70, photosynthesis: 100 },
    { age: 75, photosynthesis: 90 },
    { age: 80, photosynthesis: 80 },
  ],
  Sapin: [
    { age: 1, photosynthesis: 3 }, // Photosynthèse à différents âges pour l'espèce "Sapin".
    { age: 5, photosynthesis: 15 },
    { age: 10, photosynthesis: 40 },
    { age: 15, photosynthesis: 70 },
    { age: 20, photosynthesis: 100 },
    { age: 25, photosynthesis: 130 },
    { age: 30, photosynthesis: 160 },
    { age: 35, photosynthesis: 150 },
    { age: 40, photosynthesis: 140 },
    { age: 45, photosynthesis: 130 },
    { age: 50, photosynthesis: 120 },
    { age: 55, photosynthesis: 110 },
    { age: 60, photosynthesis: 100 },
    { age: 65, photosynthesis: 90 },
    { age: 70, photosynthesis: 80 },
    { age: 75, photosynthesis: 70 },
    { age: 80, photosynthesis: 60 },
  ],
};
