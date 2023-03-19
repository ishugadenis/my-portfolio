import React from "react";
import { Stack, Box, Typography, Grid } from "@mui/material";
import FeaturedProjectCard from "./FeaturedProjectCard";
import { getProjects } from "../services/projects";

const Aboutus = () => {
  const items = getProjects();
  //   const items = [{
  //     projectName: 'Premium Fitness App',
  //     image:Project
  //   },
  //   {
  //     projectName: 'Emax OnlineShop',
  //     image:Project
  //   },
  //   {projectName:' GymWorkout website',
  //     image:Project
  // }
  // ];
  return (
    <Box id="/aboutus" mt="20px">
      <Stack alignItems={"center"} width="100%">
        <h5 className="h5" sx={{ fontWeight: "bold" }}>
          Featured Projects
        </h5>
        <Grid container spacing={1}>
          {items.map((item) => (
            <Grid key={item.id} item xs={4}>
              <FeaturedProjectCard key={item.id} project={item} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Box>
  );
};

export default Aboutus;
