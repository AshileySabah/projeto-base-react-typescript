import styled from "styled-components";

export const Container = styled("div")`
  display: flex;
  padding: 8px 20px;
  border-top: 1px solid ${({ theme }) => theme.palette.grey[400]};
`;
