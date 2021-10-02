interface IFonts {
  link: string;
}
interface IFontWeight {
  thin:number,
  light:number,
  regular:number,
  medium:number,
  bold:number,
  black:number
}

export const fontsWeight:IFontWeight = {
    thin:100,
    light:300,
    regular:400,
    medium:500,
    bold:700,
    black:900
}

export const fonts: IFonts = {
  link: "https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap",
};
