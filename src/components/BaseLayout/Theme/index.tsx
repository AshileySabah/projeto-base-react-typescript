import { ThemeProvider as ThemeProviderMui } from "@mui/material";
import { ReactNode } from "react";
import { ThemeProvider as ThemeProviderStyled } from "styled-components";
import { theme } from "./styles";

export interface ThemeProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProps> = ({ children }) => {
  return (
    <ThemeProviderMui theme={theme}>
      <ThemeProviderStyled theme={theme}>{children}</ThemeProviderStyled>
    </ThemeProviderMui>
  );
};
