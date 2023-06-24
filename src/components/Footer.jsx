/* eslint-disable jsx-a11y/alt-text */
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  Typography,
} from "@mui/material";
import React from "react";
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram_logo.png";

function Footer() {
  const footerItems = [
    "My Customer",
    "My Creative",
    "My Media",
    "How We Do It",
    "What We Do",
  ];
  return (
    <Box
      className="footer_box"
      sx={{
        width: "100%",
        bgcolor: "#000",
        padding: "50px 0px",
        position: "relative",
      }}
    >
      <List component="nav" aria-label="secondary mailbox folder">
        {footerItems?.map((item, index) => {
          return (
            <ListItemButton key={index}>
              <Typography color="#fff" textAlign="center" margin="auto">
                {item}
              </Typography>
            </ListItemButton>
          );
        })}
        <ListItemButton sx={{justifyContent:'center',margin:'10px 0px'}}>
          <ListItemIcon>
            <img src={facebook} className="footer_logo"/>
          </ListItemIcon>
          <ListItemIcon>
            <img src={instagram} className="footer_logo"/>
          </ListItemIcon>
        </ListItemButton>
      </List>
    </Box>
  );
}

export default Footer;
