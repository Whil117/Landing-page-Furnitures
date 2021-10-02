interface Data {
  id: number;
  title: string;
  desc: string;
  img: string;
  colors: string[];
  price: number;
}

export const data: Data[] = [
  {
    id: 1,
    title: "Mueble Rústico",
    img: "/articles/1.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    colors: ["#AD3333", "#D69028"],
    price: 446.61,
  },
  {
    id: 2,
    title: "Sofa",
    img: "/articles/2.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    colors: ["#B4B4B4", "#5388D8"],
    price: 169.43,
  },
  {
    id: 3,
    title: "Sofa Duo",
    img: "/articles/3.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    colors: ["#B4B4B4", "#D88A53"],
    price: 219.43,
  },
  {
    id: 4,
    title: "Sofa Familiar",
    img: "/articles/4.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    colors: ["#B4B4B4", "#355755"],
    price: 782.01,
  },
  {
    id: 5,
    title: "Mesa de sala",
    img: "/articles/5.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    colors: ["#ADA833", "#D69028"],
    price: 351.02,
  },
  {
    id: 6,
    title: "Mesa Familiar",
    img: "/articles/6.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    colors: ["#4B4B4B", "#69390C"],
    price: 406.27,
  },
  {
    id: 7,
    title: "Sofa",
    img: "/articles/7.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    colors: ["#1A82E2", "#F46234"],
    price: 943.65,
  },
  {
    id: 8,
    title: "Silla Casual",
    img: "/articles/8.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    colors: ["#FFFFFF", "#355755"],
    price: 351.02,
  },
];
