import * as React from "react";
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
import { Link as RouterLink, useNavigate } from "react-router-dom";
import MyContext from "../components/MyContext";
import SimpleBackdrop from "../components/SimpleBackdrop";

const theme = createTheme();

export default function SignIn() {
  const { userC, onLoad} = React.useContext(MyContext);
  const [user, setUser] = userC;
  const [openOnload, setOpenOnload] = onLoad;
  

  let navigate = useNavigate();
  const handleSubmit = async (event) => {
    setOpenOnload(true);
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const res = await fetch("/api/sign-in", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.get("email"),
        password: data.get("password"),
      }),
    });
    if (res.status !== 200) {
      setOpenOnload(false);
      alert("משהו לא מסתדר, אולי הפרטים לא מדוייקים?");
      return;
    } else {
      const resJson = await res.json();
      //  console.log("resJson", resJson);

      setUser(resJson);
      //  console.log("user", user);
      const resText = await JSON.stringify(resJson);
      localStorage.setItem("user", resText);
      navigate("/api/tvila-reg", { replace: true });
      setOpenOnload(false);
      // alert("הכניסה התבצעה בהצלחה");
      
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
              כניסה
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="אימייל"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="סיסמה"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                כניסה
              </Button>
              <Grid container>
                <Grid item>
                  <RouterLink to="/api/sign-up" variant="body2">
                    {"עדין אין לך חשבון? הרשם"}
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
