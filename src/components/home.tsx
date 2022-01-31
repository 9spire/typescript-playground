import * as React from "react";
import { Typography, Box } from "@mui/material";
import ArtistSelect from "./artistSelect";

const Home = () => {
  return (
    <>
      <Box component="div" sx={{ pt: 5 }}>
        <Typography
          variant="h1"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: "block" } }}
        >
          Got a minute?
        </Typography>
        <Typography
          variant="h2"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: "block" } }}
        >
          The Review Site for Busy People
        </Typography>
      </Box>
      <ArtistSelect />
    </>
  );
};

export default Home;
