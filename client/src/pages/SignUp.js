import { Link as RouterLink, useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import psagotFamArr from "../components/LogInOut/psagotFamArr";
import Autocomplete from "@mui/material/Autocomplete";
import { useContext } from "react";
import MyContext from "../components/MyContext";
import SimpleBackdrop from "../components/SimpleBackdrop";

const theme = createTheme();

export default function SignUp() {
  const { userC, onLoad } = useContext(MyContext);
  const [user, setUser] = userC;
    const [openOnload, setOpenOnload] = onLoad;


  let navigate = useNavigate();
  const handleSubmit = async (event) => {
        setOpenOnload(true);
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const res = await fetch("/api/sign-up", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        famName: data.get("lastName"),
        name: data.get("firstName"),
        email: data.get("email"),
        password: data.get("password"),
      }),
    });

    if (res.status !== 200) {
              setOpenOnload(false);

      alert("בעיה בשם או במייל, אפשר לנסות שוב עם שם או מייל אחר");
      return;
    } else {
      const resJson = await res.json();
      setUser(resJson);
      const resText = await JSON.stringify(resJson);
      localStorage.setItem("user", resText);
      setOpenOnload(false);
      navigate("/api/tvila-reg", { replace: true });
      // alert("הרישום התבצע בהצלחה");
    }
  };

  return (
    <>
      <SimpleBackdrop />
      <ThemeProvider theme={theme}>
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
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              הרשמה
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="שם"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  {" "}
                  <Autocomplete
                    disablePortal
                    id="last-name-reg"
                    options={psagotFamArr}
                    xs={12}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="משפחה"
                        required
                        fullWidth
                        id="lastName"
                        name="lastName"
                        autoComplete="family-name"
                        align="right"
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="אימייל"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="סיסמה"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                הרשמה
              </Button>
              <Grid container>
                <Grid item>
                  <RouterLink to="/api/sign-in" variant="body2">
                    כבר נרשמת? הכנס
                  </RouterLink>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}
