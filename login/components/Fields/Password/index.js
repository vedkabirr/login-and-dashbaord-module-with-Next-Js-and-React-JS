/* eslint-disable react/display-name */
import React, {useState} from "react"
import {IconButton, InputAdornment, TextField} from "@mui/material"
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"
import {Label, Placeholder} from "../../../constants"

const PasswordField = React.forwardRef(({type, placeholder, ...props}, ref) => {
  
  const [showPassword, setShowPassword] = useState(false)
  
  return (
    <TextField
      className="mt_1"
      type={showPassword ? "text" : "password"}
      fullWidth
      variant="outlined"
      label={Label.PASSWORD}
      placeholder={Placeholder.PASSWORD}
      ref={ref}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={() => {
                setShowPassword(!showPassword)
              }}
              edge="end"
            >
              {
                showPassword ?
                (<Visibility />):
                (<VisibilityOff />)
              }
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...props}
    />
  )
})

export default PasswordField