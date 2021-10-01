export interface IService {
  id: number;
  title: string;
  img: string;
  desc: string;
}

const services: IService[] = [
  {
    id: 1,
    title: "Consultoria Gratuita",
    img: "CG",
    desc: "para sus necesidades de mobiliario",
  },
  {
    id: 2,
    title: "Garantía Global",
    img: "medal",
    desc: "Por nuestra alta calidad de materiales",
  },
  {
    id: 3,
    title: "Precio Especial",
    img: "tag",
    desc: "Indudable calidad de ofertas, solo para ti",
  },
  {
    id: 4,
    title: "Seguro de envío",
    img: "shipping",
    desc: "Es muy importante para nosotros tu satisfacción",
  },
];
export default services;
