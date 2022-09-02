import React from "react"
import {Button} from "@mui/material"

const SubmitButton = React.forwardRef(({type, placeholder, ...props}, ref) => {
  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      size="large"
      style={{
        maxHeight: "70px",
        minHeight: "55px",
        textDecoration: "none",
      }}
      {...props}
    >
      {props.children}
    </Button>
  )
})

export default SubmitButton