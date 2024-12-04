import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Box } from "@mui/material";
import { ThemeProvider } from "./Theme";

export const BaseLayout = () => {
  return (
    <ThemeProvider>
      <Header />
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        paddingX={{ xs: 3, sm: 3, md: 3, lg: 20, xl: 30 }}
        paddingY={3}
      >
        <Outlet />
      </Box>
      <Footer />
    </ThemeProvider>
  );
};
