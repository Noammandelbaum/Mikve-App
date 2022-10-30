import { Link as RouterLink } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CheckIcon from "@mui/icons-material/Check";
import MyContext from "../components/MyContext";
import { useContext } from "react";

export default function Summary() {
  const { adult, child } = useContext(MyContext);
  const [countAdult, setCountAdult] = adult;
  const [countChild, setCountChild] = child;

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <CheckIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {`טבילתך נרשמה בהצלחה!`}
        </Typography>
        <Typography component="h1" variant="h5">
          {countChild ? `${countChild} ילד` : ``}
          {countChild && countAdult ? `   |   ` : ``}
          {countAdult ? `${countAdult} מבוגר` : ``}
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container>
            <Grid item>
              <RouterLink
                to="/api/tvila-reg"
                variant="body2"
                onClick={() => {
                  setCountAdult(0);
                  setCountChild(0);
                }}
              >
                לטבילה נוספת
              </RouterLink>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
