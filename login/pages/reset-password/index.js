import React, {useState} from "react"
import {Typography} from "@mui/material"
import AuthLayout from "../../components/Layout/Auth"
import PasswordField from "../../components/Fields/Password"
import {useForm} from "react-hook-form"
import {Label, String} from "../../constants"
import {yupResolver} from "@hookform/resolvers/yup"
import {RstPassFormSchema} from "../../constants/ValidationSchema"
import SubmitButton from "../../components/SubmitButton"

const ResetPassword = () => {

  const [formSubmitted, setFormSubmitted] = useState(false);

  /*form handling*/
  const {register, handleSubmit, formState: {errors, isValid, isDirty}} = useForm({
    resolver: yupResolver(RstPassFormSchema),
    mode: "onChange"
  });

  /*on form submit*/
  const onSubmit = (rstPassData) => {
    console.log("Reset Password Data: "+JSON.stringify(rstPassData))
    setFormSubmitted(true)
  }

  return (
    <AuthLayout>
      <Typography className="title mb_1">{String.RST_PASS_TITLE}</Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <PasswordField
          {...register("password")}
          error={Boolean(errors.password)}
          helperText={errors.password ? errors.password.message : ""}
          label={Label.RST_PASS}
        />

        <PasswordField
          {...register("confirmPassword")}
          error={Boolean(errors.confirmPassword)}
          helperText={errors.confirmPassword ? errors.confirmPassword.message : ""}
          label={Label.RST_PASS_CONFIRM}
        />

        <hr className="mt_2"/>

        <SubmitButton
          className="mt_1 mb_1"
          disabled={!isValid || !isDirty}
        >
          Submit
        </SubmitButton>
      </form>
      
    </AuthLayout>
  )
}

export default ResetPassword