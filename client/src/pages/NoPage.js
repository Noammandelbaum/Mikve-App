import { Link as RouterLink } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";

export default function NoPage() {

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
          <PriorityHighIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {`צריך להתחבר מחדש`}
        </Typography>

        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Button
            component={RouterLink}
            to="/api/sign-in"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 0 }}
          >
            אני כבר רשום
          </Button>

          <Button
            component={RouterLink}
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
