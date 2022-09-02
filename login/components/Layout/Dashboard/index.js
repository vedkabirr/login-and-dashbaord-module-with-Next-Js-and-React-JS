import React, {useState} from "react"
import styles from "./DashboardLayout.module.css"
import {Grid} from "@mui/material"
import LoginAppBar from '../../LoginAppBar'
import LoginMenuBar from "../../Dashboard/LoginMenuBar"
import {drawerWidth} from "../../../constants"

const DashboardLayout = (props) => {
  const [showMobileMenuBar, setShowMobileMenuBar] = useState(false)
  return (
    <Grid container
      direction="column"
      // justifyContent="center"
      // alignItems="center"
      // textAlign="center"
    >
      <LoginAppBar toggleMobileMenuBar={() => {
        setShowMobileMenuBar(!showMobileMenuBar)
      }} />
      {
        (props.enableMenuBar)?
        (
          <LoginMenuBar showMobileMenuBar={showMobileMenuBar}>
            {props.children}
          </LoginMenuBar>
        ):
        (
          <Grid container sx={{display: "flex", alignSelf: "flex-start"}}>
            <Grid item sx={{width: drawerWidth}}></Grid>
            <Grid item sx={{flexGrow: 1, p: 3}}>
              {props.children}
            </Grid>
          </Grid>
        )
      }
      
    </Grid>
  )
}

DashboardLayout.defaultProps = {
  enableMenuBar: true
}

export default DashboardLayout