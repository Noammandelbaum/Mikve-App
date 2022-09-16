import ChildRegButton from "./ChildReg";
import AdultRegButton from "./AdultReg";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

export default function TvilaReg() {
  return (
    <>
      <AdultRegButton />
      <Divider variant="middle" />
      <ChildRegButton />
      <Divider variant="middle" />
      <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
        <Button variant="contained">אישור</Button>
      </Box>
    </>
  );
}
