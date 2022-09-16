import * as React from "react";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function DipTab({ tovlCategoryName, noteCategory,costPerTovel }) {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <Box sx={{ width: "100%", maxWidth: "360", bgcolor: "background.paper" }}>
        <Box sx={{ my: 3, mx: 2 }}>
          <Grid container alignItems="center">
            <Grid item xs>
              <Typography gutterBottom variant="h6" component="div">
                {/* {counter > 0 && `₪${counter * tvilaCost}`} */}
                {/* ₪{counter*10} */}
              </Typography>
            </Grid>
            <Grid item>
              <Typography gutterBottom variant="h4" component="div">
                {tovlCategoryName}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography color="text.secondary" variant="body2" align="right">
              {`₪${costPerTovel}`}
            </Typography>
          </Grid>
        </Box>
      </Box>

      <Stack spacing={0} direction="row">
        <IconButton
          color="primary"
          aria-label="remove"
          onClick={() => setCounter(() => (counter > 0 ? counter - 1 : 0))}
        >
          <RemoveIcon />
        </IconButton>
        {/* <Button variant="contained">מבוגר</Button>
        <Button variant="outlined">{counter} </Button> */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            "& > *": {
              m: 1,
            },
          }}
        >
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button>{tovlCategoryName}</Button>
            <Button>{counter}</Button>
          </ButtonGroup>
        </Box>
        <IconButton
          color="primary"
          aria-label="add"
          onClick={() => setCounter(counter + 1)}
        >
          <AddIcon />
        </IconButton>
      </Stack>
    </>
  );
}
