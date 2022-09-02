import {Grid, Typography} from "@mui/material"
import React from "react"
import DashboardLayout from "../../components/Layout/Dashboard"


export const Dashboard = (props) => {
  return (
    <DashboardLayout enableMenuBar={true}>
      
      <Typography className="title mb_2" textAlign='left !important'>Dashboard</Typography>

      <Grid container direction='row' spacing={2}>
      </Grid>

    </DashboardLayout>
  )
}

export default Dashboard