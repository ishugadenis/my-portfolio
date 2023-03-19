import React from "react";
import { getProject } from "../services/projects";
import { Stack, Box, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { Opacity } from "@mui/icons-material";

const ProjectPage = () => {
  const { id } = useParams();

  const currentProject = getProject(id);
  console.log(currentProject);

  return (
    <Box gap={2} p={3}>
      <Stack direction={"row"}>
        <Stack className="image-container" alignItems={"center"}>
          <img
            src={currentProject.image}
            alt={currentProject.name}
            width={"60%"}
          />
          {/* <div className="gradient-overlay"></div> */}

          <h5>{currentProject.name}</h5>
        </Stack>
        <Stack alignItems={"center"} mt={2}>
          <p>{currentProject.about}</p>
          <Stack>
            <ul className="functionalities">
              {currentProject.functionalities.map((objective) => (
                <li key={objective}>{objective}</li>
              ))}
            </ul>
          </Stack>
          <Button variant="outlined" sx={{marginTop:"30px", color:'#2bd883', borderColor:"#2bd883"  }}>
            Download Apk
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ProjectPage;
