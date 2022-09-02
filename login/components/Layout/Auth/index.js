import React from "react"
import styles from "./AuthLayout.module.css"
import {Grid} from "@mui/material"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const AuthLayout = (props) => {
  return (
    <Grid container
      className={styles.container}
      direction="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
    >
      <Grid item>
        <Card className={styles.card}>
          <CardContent>
            {props.children}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default AuthLayout