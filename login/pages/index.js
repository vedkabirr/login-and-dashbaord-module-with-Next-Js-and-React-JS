import { yupResolver } from "@hookform/resolvers/yup"
import { Typography } from "@mui/material"
import Link from "next/link"
import React from "react"
import { useForm } from "react-hook-form"
import EmailField from "../components/Fields/Email"
import PasswordField from "../components/Fields/Password"
import AuthLayout from "../components/Layout/Auth"
import SubmitButton from "../components/SubmitButton"
import { String } from "../constants"
import { LoginFormSchema } from "../constants/ValidationSchema"


const Login = () => {
  /*form handling*/
  const {register, handleSubmit, formState: {errors, isValid, isDirty}} = useForm({
    resolver: yupResolver(LoginFormSchema),
    mode: "onChange"
  });

  /*on form submit*/
  const onSubmit = (lgnData) => {
    console.log("Login Data: "+JSON.stringify(lgnData))
  }

  return (
    <AuthLayout>
    

      <Typography className="title mb_2">{String.LGN_TITLE}</Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <EmailField
          {...register("email")}
          error={Boolean(errors.email)}
          helperText={errors.email && errors.email.message}
        />

        <PasswordField
          {...register("password")}
          error={Boolean(errors.password)}
          helperText={errors.password && errors.password.message}
        />

        <hr className="mt_2"/>

        <SubmitButton
          className="mt_1 mb_1"
          disabled={!isValid || !isDirty}
        >
          Login
        </SubmitButton>
      </form>

      <Link href="/forgot-password" passHref={true}>Forgot password?</Link>

    </AuthLayout>
  )
}

export default Login