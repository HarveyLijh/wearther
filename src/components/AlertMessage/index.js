import { forwardRef } from "react";
import PropTypes from "prop-types";
import MDSnackbar from "components/MDSnackbar";

const AlertMessage = forwardRef(({ open, setOpen, severity, message }, ref) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <MDSnackbar
      color="success"
      icon="check"
      title={severity}
      content={message}
      open={open}
      ref={ref}
      autoHideDuration={3000}
      onClose={handleClose}
      close={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    />
  );
});

AlertMessage.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  severity: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default AlertMessage;
