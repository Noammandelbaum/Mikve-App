import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import MyContext from "../MyContext";

export default function ConfirmLine() {
  const { child, adult } = useContext(MyContext);
  const [countChild] = child;
  const [countAdult] = adult;
  return (
    <>
      <Grid item>
        <Typography
          color="text.secondary"
          variant="body2"
          sx={{ my: 1.5, mx: 2 }}
        >
          {!countChild && !countAdult ? `יש ללחוץ על ה '+'` : `סך הכל : `}
          {countChild ? `${countChild} ילד` : ``}
          {countChild && countAdult ? `   |   ` : ``}
          {countAdult ? `${countAdult} מבוגר` : ``}
        </Typography>
      </Grid>
      {/* <Grid sx={{ my: 1.5, mx: 5.56 }} align="left">
        <Button variant="contained">אישור</Button>
      </Grid> */}
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        אישור
      </Button>
    </>
  );
}
