import { Dispatch, ReactNode, SetStateAction } from "react";
import Dialog from "@mui/material/Dialog";
import { Alert, AlertColor, Box, Typography } from "@mui/material";

export interface ModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  closeOnClickAway?: boolean;
  p?: number;
  title?: string;
  severity?: AlertColor | "none";
  children: ReactNode;
  onClose?: (alertSeverity: AlertColor | "none") => void;
}

export const Modal: React.FC<ModalProps> = ({
  open,
  setOpen,
  closeOnClickAway = true,
  p = 4,
  title,
  severity = "none",
  children,
  onClose,
}) => {
  const close = () => {
    if (onClose) {
      onClose(severity);
    }
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={closeOnClickAway ? () => close() : undefined}
      fullWidth
    >
      {title && (
        <Alert
          variant="filled"
          severity={severity as AlertColor}
          sx={{ borderRadius: 0 }}
          onClose={!closeOnClickAway ? () => close() : undefined}
        >
          <Typography fontWeight="bold">{title}</Typography>
        </Alert>
      )}
      <Box p={p}>{children}</Box>
    </Dialog>
  );
};
