import ChildRegButton from "../components/TvilaReg/ChildReg";
import AdultRegButton from "../components/TvilaReg/AdultReg";
import ConfirmLine from "../components/TvilaReg/ConfirmLine";
import Divider from "@mui/material/Divider";
import { Avatar, Box, Container, CssBaseline, Typography } from "@mui/material";
import * as React from "react";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="right" {...props}>
//       {"© נעם מנדלבאום"}
//       {"."}
//     </Typography>
//   );
// }

const theme = createTheme();

export default function TvilaReg() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              marginBottom: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              טבילה
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  {/* <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="שם"
                    autoFocus
                  /> */}
                  <AdultRegButton />
                </Grid>
                <Grid item xs={12}>
                  <Divider variant="middle" />
                  <ChildRegButton />
                </Grid>
                <Grid item xs={12}>
                  <Divider variant="middle" />
                  <ConfirmLine />
                </Grid>
              </Grid>
            </Box>
          </Box>
          {/* <Copyright sx={{ mt: 5 }} /> */}
        </Container>
      </ThemeProvider>
    </>
  );
}
