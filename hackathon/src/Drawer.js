import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const pages = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Sign to Text", path: "/signtotext" },
  { name: "Text to Sign", path: "/texttosign" },
  { name: "Contact Us", path: "/contact" },
];

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
      <Drawer
        anchor="top"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          {pages.map((page, index) => (
            <Link to={page.path} key={index} style={{textDecoration:'none',fontWeight:700}}>
              <ListItemButton onClick={() => setOpenDrawer(false)}>
                <ListItemIcon>
                  <ListItemText>{page.name}</ListItemText>
                </ListItemIcon>
              </ListItemButton>
            </Link>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "black", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
