import React from "react";
import { AppBar, Box, Toolbar, Typography, Link as Goto } from "@mui/material";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";

const Menu = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="primary" enableColorOnDark>
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <Link to="/">
                <Goto underline="hover" color="white">
                  Got a minute?
                </Goto>
              </Link>
            </Typography>
            <Typography
              noWrap
              component="div"
              sx={{ display: { xs: "block" }, px: 2 }}
            >
              <Link to="/submit">
                <Goto underline="hover" color="white">
                  Submit
                </Goto>
              </Link>
            </Typography>
            <Typography
              noWrap
              component="div"
              sx={{ display: { xs: "block" }, px: 2 }}
            >
              <Link to="/about">
                <Goto underline="hover" color="white">
                  About
                </Goto>
              </Link>
            </Typography>
            <Goto
              href="https://github.com/9spire/typescript-playground"
              target="_blank"
            >
              <GitHubIcon sx={{ fontSize: 20, color: "white", px: 2 }} />
            </Goto>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Menu;
