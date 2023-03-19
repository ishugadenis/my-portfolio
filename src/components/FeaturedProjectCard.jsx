import React from "react";
import { Link } from "react-router-dom";

import {
  Box,
  Card,
  Typography,
  CardActions,
  Button,
  CardMedia,
  CardContent,
} from "@mui/material";

import { ArrowForward } from "@mui/icons-material";
import shadows from "@mui/material/styles/shadows";

const FeaturedProjectCard = ({project}) => {
  const {name, image, id} = project;
  return (
    <Box m={5}>
      <Card sx={{ width: 345, backgroundColor: "#161c21",boxShadow: '0px 3px 6px #00000029' }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="240"
          image={image}
        />
        <CardContent>
          <Typography variant="h5" component="div" color={"#ffff"}>
            {name}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
        </CardContent>
        <CardActions>
         <Link to = {`/project/${id}`}>
         <Button
          
          size="medium"
          sx={{ color: "#2bd883", textDecoration:"none"}}
          endIcon={<ArrowForward />}
        >
          Show more
        </Button></Link>
          {/* <Button size="small">Learn More</Button> */}
        </CardActions>
      </Card>
    </Box>
  );
};

export default FeaturedProjectCard;
