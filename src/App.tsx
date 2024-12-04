import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@/components/BaseLayout/Theme";
import { Routes } from "@/routes";
import { AlertProvider } from "@/hooks/Alert/useAlert";
import { BackdropLoaderProvider } from "@/hooks/BackdropLoader/useBackdropLoader";

export const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <BackdropLoaderProvider>
          <AlertProvider>
            <Routes />
          </AlertProvider>
        </BackdropLoaderProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};
