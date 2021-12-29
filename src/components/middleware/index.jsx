import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";

export default function AlertMiddleware({ children }) {
  const [open, setOpen] = React.useState(false);
  const alert = useSelector((state) => state.alert);

  React.useEffect(() => {
    if (alert.message) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [alert.message]);
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      {children}
      <Snackbar
        open={open}
        autoHideDuration={2900}
        onClose={handleClose}
        message={alert?.message}
        action={action}
      />
    </div>
  );
}
