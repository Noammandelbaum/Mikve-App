import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import psagotFamArr from "./psagotFamArr";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function BasicLogin() {
    return (
      <>
        <Box
          sx={{
            minWidth: 120,
            maxWidth: "360",
            bgcolor: "background.paper",
            my: 3,
            mx: 2,
          }}
          align="right"
        >
          <FormControl>
            <InputLabel variant="standard" htmlFor="lastname">
              משפחה
            </InputLabel>
            <NativeSelect
              defaultValue={""}
              inputProps={{
                name: "משפחה",
                id: "lastname",
              }}
            >
              {psagotFamArr.map((fam) => (
                <option value={fam} key={fam} align="right">
                  {fam}
                </option>
              ))}
            </NativeSelect>
          </FormControl>
        </Box>

        <Autocomplete
          disablePortal
          id="last-name-reg"
          options={psagotFamArr}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="משפחה" />}
        />
      </>
    );
}



