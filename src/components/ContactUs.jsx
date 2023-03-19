import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const ContactUs = () => {
  return (
    <Box id="/contactus">
      <Stack width={"100%"} alignItems="Center">
        {" "}
        <h5>Contact us</h5>
      </Stack>
      <Stack direction="row" backgroundColor="#161c21">
        <Stack m={3}>
          <Typography>Facebook</Typography>
          <Typography>Instagram</Typography>
          <Typography>Twitter</Typography>
          <Typography>Linked In</Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ContactUs;
