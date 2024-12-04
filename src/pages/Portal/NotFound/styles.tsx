import { Grid } from "@mui/material";
import styled, { css } from "styled-components";

export const Container = styled(Grid)`
  p {
    text-align: center;

    &:nth-child(1) {
      font-size: 10rem;
      font-weight: bold;
      color: ${({ theme }) => theme?.palette?.primary?.main};
      line-height: 10rem;
    }

    &:nth-child(2) {
      font-size: 1.5rem;
    }

    ${({ theme }) => css`
      ${theme.breakpoints.down("sm")} {
        &:nth-child(1) {
          font-size: 5rem;
          line-height: 5rem;
        }

        &:nth-child(2) {
          font-size: 1rem;
        }
      }
    `}
  }
`;
