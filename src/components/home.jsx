import React from "react";
import { Stack, Box, Button} from "@mui/material";
import Profile from "../assets/images/den.png";

const Home = () => {
  return (
    <Box id="/" width="100%">
      <Stack className={"home"} direction="row">
        <Stack alignItems={"center"} width={"50%"}>
          <p style={{ marginTop: "200px" }}>
            Hello My name is Denis Ishuga I am
            <br />a <span className="myTitle">Web & Mobile developer</span>
          </p>
          <Button
            variant={"outlined"}
            sx={{ marginTop: "50px", borderColor: "#28d883", color: "#28d883" }}
          >
            Read More...
          </Button>
        </Stack>
        <Stack
          alignItems={"end"}
          justifyContent={"center"}
          width="100%"
          height={"600px"}
        >
          <img
            src={Profile}
            alt="profile"
            style={{ opacity: "100%" }}
            //  width={"300px"} height={"200px"}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Home;
