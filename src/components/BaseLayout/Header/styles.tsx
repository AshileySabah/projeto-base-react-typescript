import { AppBar } from "@mui/material";
import styled, { css } from "styled-components";

export const Menu = styled(AppBar)`
  display: flex;
  flex-direction: row !important;
  align-items: center;
  justify-content: space-between;
  padding: 8px 20px;
  box-shadow: none;

  ${({ theme }) => css`
    ${theme.breakpoints.down("md")} {
      flex-direction: column !important;
    }
  `}
`;
