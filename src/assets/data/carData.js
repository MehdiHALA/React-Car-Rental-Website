// import all images from assets/images directory
import img01 from "../all-images/cars-img/Kadjar.png";
import img02 from "../all-images/cars-img/Touareg.png";
import img03 from "../all-images/cars-img/208.png";

const carData = [
  {
    id: 1,
    brand: "Renault",
    carName: "Renault Kadjar",
    imgUrl: img01,
    model: "Model-2020",
    price: 450,
    gps: "GPS Navigation",
    automatic: "Automatic",
    description:
      " Experience the ultimate convenience and comfort of the Renault Kadjar from our reputable car rental company. With its automatic transmission, this stylish SUV offers a smooth and effortless driving experience. Enjoy the spacious interior, advanced features, and stylish design of the Renault Kadjar as you embark on your journey. Rent the Renault Kadjar from us and discover the joy of automatic driving.",
  },

  {
    id: 2,
    brand: "Volkswagen",
    carName: "Volkswagen Touareg",
    imgUrl: img02,
    model: "Model-2017",
    price: 800,
    gps: "GPS Navigation",
    automatic: "Manual",
    description:
      "Introducing the Volkswagen Touareg: a symbol of luxury and performance. With its sleek design and powerful engine, this premium SUV offers a refined driving experience like no other. Immerse yourself in the comfort of its spacious interior, equipped with cutting-edge technology and luxurious amenities. Whether you're embarking on a thrilling adventure or cruising through city streets, the Volkswagen Touareg ensures a smooth and exhilarating journey, making every drive an unforgettable experience.",
  },

  {
    id: 3,
    brand: "Peugeot",
    carName: "Peugeot 208",
    imgUrl: img03,
    model: "Model-2022",
    price: 300,
    gps: "GPS Navigation",
    automatic: "Automatic",
    description:
      "Discover the Peugeot 208: a compact and stylish hatchback designed for urban adventures. With its sleek design and nimble performance, this car is perfect for zipping through city streets with ease. Step into the modern and comfortable interior, where innovative features and intuitive controls create an enjoyable driving experience. Whether you're commuting to work or exploring the city, the Peugeot 208 offers a perfect balance of style, efficiency, and maneuverability. Embrace the joy of driving in the Peugeot 208.",
  },
];

export default carData;
