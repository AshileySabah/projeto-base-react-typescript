import { Modal } from "@/components/Modal";
import { AlertColor, Grid, Typography } from "@mui/material";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export interface AlertProps {
  severity: AlertColor;
  title?: string;
  message?: string;
  duration?: number;
  onClose?: (alertSeverity: AlertColor | "none") => void;
}

interface AlertContextProps {
  setAlert: React.Dispatch<React.SetStateAction<AlertProps | undefined>>;
}

const AlertContext = createContext<AlertContextProps>({} as AlertContextProps);

const AlertProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [alert, setAlert] = useState<AlertProps | undefined>();
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const AlertValue = useMemo(() => ({ setAlert }), [setAlert]);

  useEffect(() => {
    if (alert?.message) {
      setShowAlert(true);

      if (alert?.duration) {
        setTimeout(() => {
          setShowAlert(false);
        }, alert?.duration || 3000);
      }
    }
  }, [alert]);

  return (
    <AlertContext.Provider value={AlertValue}>
      {showAlert && (
        <Modal
          open={showAlert}
          setOpen={setShowAlert}
          closeOnClickAway={false}
          title={alert?.title}
          severity={alert?.severity}
          onClose={(alertSeverity) => {
            if (alert?.onClose) {
              alert?.onClose(alertSeverity);
            }
          }}
        >
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12}>
              <Typography textAlign="justify">{alert?.message}</Typography>
            </Grid>
          </Grid>
        </Modal>
      )}

      {children}
    </AlertContext.Provider>
  );
};

function useAlert(): AlertContextProps {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlert must be used within a AlertProvider");
  }

  return context;
}

export { AlertProvider, useAlert };
