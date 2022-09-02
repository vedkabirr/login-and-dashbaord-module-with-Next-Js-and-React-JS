/* eslint-disable react/display-name */
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../Logo"
import Link from "next/link"
import HomeIcon from "@mui/icons-material/Home"

const appBarItems = [{
  icon: <HomeIcon />,
  title: "Home",
  link: "/dashboard",
  active: false
}];
const settings = ["Profile", "Account", "Logout"];

const LoginAppBar = React.forwardRef(({type, placeholder, ...props}, ref) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar style={{justifyContent: "space-between"}}>

        <Box sx={{display: {xs: "contents", md: "none"}}}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={props.toggleMobileMenuBar}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
        </Box>

        <Box>
          <Logo />
        </Box>
        
        <Box sx={{flexGrow: 1, display: {xs: "none", md: "flex"}}}>
          {
            Object.keys(appBarItems).map((index) => {
              var appBarItem = appBarItems[index]
              return (
                <Link href={appBarItem.link} key={index} passHref>
                  <Button
                    key={index}
                    onClick={handleCloseNavMenu}
                    sx={{mx: 5, color: "white"}}
                    startIcon={appBarItem.icon}
                  >
                    {appBarItem.title}
                  </Button>
                </Link>
              )
            })
          }
        </Box>
        
        <Box sx={{flexGrow: 0}}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
              <Avatar alt="Avocado" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{mt: "45px"}}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>

      </Toolbar>
    </AppBar>
  );
})

export default LoginAppBar