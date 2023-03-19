import React from "react";
import { Box, Stack, Typography} from "@mui/material";
import ProjectCard from "./ProjectCard";
import UiIcon from "../assets/images/uiux.png";
import WebIcon from "../assets/images/code.png";
import MobileIcon from "../assets/images/mobile.png";

const Projects = () => {
  const projectInfos = [
    {
      name: "Webs development",
      icon:WebIcon,
      info: "10 projs+",
      color:"#2bd883"
      
    },
    {
      name: "Mobile Apps",
      icon:MobileIcon,
      info: "6 projs+",
      backgroundColor: '#2bd883'
    },
    {
      name: "UI & UX Design",
      icon:UiIcon,
      info: "3 projs+",
      color:"#2bd883",
      
      
    },
   
    
  ];

  return (
    <Box id="/projects" mt="20px">
      <Stack width={"100%"} alignItems={"center"}>
        <h5 className="h5" sx={{ fontWeight: "bold" }}>
          My Projects
        </h5>
      </Stack>
      <Stack direction={"row"} justifyContent={"center"}>
        {projectInfos.map((projectInfo) => (
          <ProjectCard key={projectInfo.name} projectInfo={projectInfo} />
        ))}
      </Stack>
    </Box>
  );
};

export default Projects;
