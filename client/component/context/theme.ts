import React from "react";

interface ITheme {
  light: string;
  dark: string;
  fontColor: string;
  card: {
    bg: string;
    header: string;
    font: string;
  };
}
export const Theme = React.createContext<null | ITheme>(null);
