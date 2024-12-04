import { Backdrop, CircularProgress } from "@mui/material";
import React, { createContext, useContext, useMemo, useState } from "react";

interface BackdropLoaderContextProps {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const BackdropLoaderContext = createContext<BackdropLoaderContextProps>(
  {} as BackdropLoaderContextProps,
);

const BackdropLoaderProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [loading, setLoading] = useState<boolean>(false);

  const BackdropLoaderValue = useMemo(
    () => ({ loading, setLoading }),
    [loading, setLoading],
  );

  return (
    <BackdropLoaderContext.Provider value={BackdropLoaderValue}>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 999 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      {children}
    </BackdropLoaderContext.Provider>
  );
};

function useBackdropLoader(): BackdropLoaderContextProps {
  const context = useContext(BackdropLoaderContext);
  if (!context) {
    throw new Error(
      "useBackdropLoader must be used within a BackdropLoaderProvider",
    );
  }

  return context;
}

export { BackdropLoaderProvider, useBackdropLoader };
