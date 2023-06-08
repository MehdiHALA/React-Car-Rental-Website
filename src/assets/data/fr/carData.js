// import all images from assets/images directory
import img01 from "../../all-images/cars-img/Kadjar.png";
import img02 from "../../all-images/cars-img/Touareg.png";
import img03 from "../../all-images/cars-img/208.png";

const carData = [
  {
    id: 1,
    brand: "Renault",
    carName: "Renault Kadjar",
    imgUrl: img01,
    model: "Modèle-2020",
    price: 450,
    gps: "Navigation GPS",
    automatic: "Automatique",
    description:
      "Découvrez le Renault Kadjar : un SUV automatique polyvalent au design élégant, idéal pour les déplacements en ville et les escapades en pleine nature. Avec sa transmission automatique fluide, conduire le Renault Kadjar est un véritable plaisir. Profitez de son habitacle confortable et spacieux, ainsi que de ses fonctionnalités technologiques avancées. Le Renault Kadjar automatique est prêt à vous accompagner dans tous vos trajets, que ce soit au quotidien ou lors de vos aventures.",
  },

  {
    id: 2,
    brand: "Volkswagen",
    carName: "Volkswagen Touareg",
    imgUrl: img02,
    model: "Modèle-2017",
    price: 800,
    gps: "Navigation GPS",
    automatic: "Manuelle",
    description:
      "Découvrez la Volkswagen Touareg : un SUV élégant et polyvalent conçu pour les aventures urbaines. Avec son design raffiné et ses performances agiles, cette voiture est parfaite pour se faufiler dans les rues de la ville en toute simplicité. Plongez dans son intérieur moderne et confortable, où des fonctionnalités innovantes et des commandes intuitives créent une expérience de conduite agréable. Que vous vous rendiez au travail ou que vous exploriez la ville, la Volkswagen Touareg offre un équilibre parfait entre style, efficacité et maniabilité. Profitez pleinement du plaisir de conduire dans la Volkswagen Touareg.",
  },

  {
    id: 3,
    brand: "Peugeot",
    carName: "Peugeot 208",
    imgUrl: img03,
    model: "Modèle-2022",
    price: 300,
    gps: "Navigation GPS",
    automatic: "Automatique",
    description:
      "Découvrez la Peugeot 208 : une citadine compacte et stylée conçue pour les aventures urbaines. Avec son design élégant et ses performances agiles, cette voiture est parfaite pour se faufiler dans les rues de la ville en toute simplicité. Plongez dans son intérieur moderne et confortable, où des fonctionnalités innovantes et des commandes intuitives créent une expérience de conduite agréable. Que vous vous rendiez au travail ou que vous exploriez la ville, la Peugeot 208 offre un équilibre parfait entre style, efficacité et maniabilité. Profitez pleinement du plaisir de conduire dans la Peugeot 208.",
  },
];

export default carData;
