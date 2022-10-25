import ChildRegButton from "../components/TvilaReg/ChildReg";
import AdultRegButton from "../components/TvilaReg/AdultReg";
import ConfirmLine from "../components/TvilaReg/ConfirmLine";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import Divider from "@mui/material/Divider";
import { Avatar, Box, Container, CssBaseline, Typography } from "@mui/material";
import * as React from "react";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

export default function TvilaReg() {
  let navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/api/summary", { replace: true });
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
              <AllInclusiveIcon />
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
        </Container>
      </ThemeProvider>
    </>
  );
}
