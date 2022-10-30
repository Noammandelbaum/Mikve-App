import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "../MyContext";
import SimpleBackdrop from "../SimpleBackdrop";

export default function ConfirmLine() {
  let navigate = useNavigate();

  const { child, adult, userC, onLoad } = useContext(MyContext);
  const [countChild] = child;
  const [countAdult] = adult;
  const [user] = userC;
  const [openOnload, setOpenOnload] = onLoad;

  const idUser = user._id;

  const handleSubmit = async (event) => {
    setOpenOnload(true);
    event.preventDefault();
    const res = await fetch("/api/tvila-reg", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idUser,
        countChild,
        countAdult,
      }),
    });
    await setOpenOnload(false);
    if (res.status !== 200) {
      alert("משהו לא מסתדר, נסה להכנס מחדש.");
      return;
    } else {
      navigate("/api/summary", { replace: true });
    }
  };
  return (
    <>
      <SimpleBackdrop />
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
      <Button
        type="submit"
        fullWidth
        onClick={handleSubmit}
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        אישור
      </Button>
    </>
  );
}
