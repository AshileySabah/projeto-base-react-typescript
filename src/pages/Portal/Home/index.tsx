import { Grid, Typography } from "@mui/material";

export const Home: React.FC = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography color="primary" fontSize={30} fontWeight="bold">
          Projeto
        </Typography>
      </Grid>
    </Grid>
  );
};
