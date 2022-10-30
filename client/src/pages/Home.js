import { Link as RouterLink } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import BungalowIcon from "@mui/icons-material/Bungalow";

export default function Home() {
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
          <BungalowIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {`מקווה גברים פסגות`}
        </Typography>

        <Box sx={{ my: 3, mx: 3 }}>
          <Grid container alignItems="center">
            <Grid item>
              <Typography gutterBottom variant="h6" component="div">
                {`רישום הטבילה מתבצע כאן, באתר.`}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                {`התשלום יגבה בסוף החודש, יחד עם מיסי היישוב.`}
              </Typography>
            </Grid>
          </Grid>

          <Button
            component={Link}
            to="/api/sign-in"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 0 }}
          >
            אני כבר רשום
          </Button>

          <Button
            component={Link}
            to="/api/sign-up"
            fullWidth
            variant="contained"
            sx={{ mt: 2, mb: 1 }}
          >
            עוד לא נרשמתי
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
