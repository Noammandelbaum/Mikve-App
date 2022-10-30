import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import MyContext from "./MyContext";

export default function SimpleBackdrop() {
  const { onLoad } = React.useContext(MyContext);
  const [openOnload, setOpenOnload] = onLoad;

  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={openOnload}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
