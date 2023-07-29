import React, { useEffect, useState } from "react";
import { withRouter } from 'react-router-dom';
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";


import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CellTowerIcon from '@mui/icons-material/CellTower';
import DrawerComp from "./Drawer";
const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);


  return (
    <React.Fragment>
      <AppBar sx={{ background: "white" }}>
        <Toolbar>
          <CellTowerIcon sx={{ transform: "scale(2)" }} style={{color:'black'}} />
          <Typography style={{color:'black',fontWeight:'bolder',fontSize:24,marginLeft:20}}>VirtualVoice</Typography>
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                VirtualVoice
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="primary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <NavLink style={{color:'black',fontWeight:700,textDecoration:'none'}} to='/'><Tab style={{fontWeight:700}} label="Home" /></NavLink>
                <NavLink style={{color:'black',fontWeight:700,textDecoration:'none'}} to='/signtotext'><Tab style={{fontWeight:700}} label="Sign To Text" /></NavLink>
                <NavLink style={{color:'black',fontWeight:700,textDecoration:'none'}} to='/texttosign'><Tab style={{fontWeight:700}} label="Speech to Sign" /></NavLink>
                <NavLink style={{color:'black',fontWeight:700,textDecoration:'none'}} to='/deafgpt'><Tab style={{fontWeight:700}} label="DeafGPT" /></NavLink>
                <NavLink style={{color:'black',fontWeight:700,textDecoration:'none'}} to='/learningmodules'><Tab style={{fontWeight:700}} label="Learning Modules" /></NavLink>
              </Tabs>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
