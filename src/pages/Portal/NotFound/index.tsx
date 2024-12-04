import { Grid, Typography } from "@mui/material";
import { Container } from "./styles";

export const NotFound: React.FC = () => {
  return (
    <Container container justifyContent="center">
      <Grid item xs={12} sm={10} md={8} lg={8} xl={5}>
        <Typography>404</Typography>
        <Typography>Página não encontrada!</Typography>
      </Grid>
    </Container>
  );
};
