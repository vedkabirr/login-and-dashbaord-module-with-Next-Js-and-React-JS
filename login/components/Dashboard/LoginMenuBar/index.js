/* eslint-disable react/display-name */
import React from "react";
import styles from "./LoginMenuBar.module.css";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Grid, ListItemButton, Typography } from "@mui/material";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import ContactlessIcon from "@mui/icons-material/Contactless";
import AssessmentIcon from "@mui/icons-material/Assessment";
import { isMobile } from "react-device-detect";
import { drawerWidth } from "../../../constants";

const menuBarItems = [
  {
    icon: <HomeIcon />,
    title: "Home",
    link: "/manager/location/menu",
    active: true,
  },
  {
    icon: <ContactlessIcon />,
    title: "Connect",
    link: "#",
    active: false,
  },
  {
    icon: <AssessmentIcon />,
    title: "Reports",
    link: "#",
    active: false,
  },
];

const LoginMenuBar = React.forwardRef(
  ({ type, placeholder, ...props }, ref) => {
    return (
      <Grid container sx={{ display: "flex", alignSelf: "flex-start" }}>
        <Grid item>
          <Drawer
            variant={isMobile ? "temporary" : "permanent"}
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: {
                width: drawerWidth,
                boxSizing: "border-box",
                backgroundColor: "#FFF",
              },
            }}
            open={props.showMobileMenuBar}
          >
            <Toolbar />
            <Typography className="title" my={3}>
              Dashboard - Welcome
            </Typography>
            <Grid item sx={{ overflow: "auto" }}>
              <List>
                {Object.keys(menuBarItems).map((index) => {
                  var menuBarItem = menuBarItems[index];
                  return (
                    <Link href={menuBarItem.link} key={index} passHref>
                      <ListItemButton
                        selected={menuBarItem.active}
                        key={index}
                        className={styles.listItem}
                      >
                        <ListItemIcon className="icon_spacing">
                          {menuBarItem.icon}
                        </ListItemIcon>
                        <ListItemText primary={menuBarItem.title} />
                      </ListItemButton>
                    </Link>
                  );
                })}
              </List>
            </Grid>
          </Drawer>
        </Grid>
        <Grid item sx={{ flexGrow: 1, p: 3 }}>
          {props.children}
        </Grid>
      </Grid>
    );
  }
);

export default LoginMenuBar;
