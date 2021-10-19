import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import { Link } from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <>
      <div id="top-header">
        <div className="container clearfix"></div>
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Home
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Projects
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Services
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              About
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Testimonials
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Contact
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
