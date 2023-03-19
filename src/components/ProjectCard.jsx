import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const ProjectCard = ({ projectInfo }) => {
  const { info, name, icon, backgroundColor,color } = projectInfo;

  return (
    <Box className="projectCard" sx={{ backgroundColor: `${backgroundColor}` }}>
      <Stack alignItems={"center"} mt={2}>
        <img className="gitImage" src={icon} alt="github" height={"100px"} />
        <p style={{ color:`${color}` , marginBottom:"0px" }}>{name}</p>
        <p style={{ color:`${color}` }}>{info}</p>
      </Stack>
    </Box>
  );
};

export default ProjectCard;
