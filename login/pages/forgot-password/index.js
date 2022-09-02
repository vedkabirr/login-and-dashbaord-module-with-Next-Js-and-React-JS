import React, {useState} from "react"
import {Typography, Button} from "@mui/material"
import Link from "next/link"
import AuthLayout from "../../components/Layout/Auth"
import EmailField from "../../components/Fields/Email"
import {useForm} from "react-hook-form"
import {String} from "../../constants"
import {FrgtPassFormSchema} from "../../constants/ValidationSchema"
import {yupResolver} from "@hookform/resolvers/yup"
import SubmitButton from "../../components/SubmitButton"

const ForgotPasswordSuccess = () => {
  return (
    <>
      <Typography className="title mb_1">{String.FRGT_SUCCESS_TITLE}</Typography>
      <Typography className="subtitle mb_2">{String.FRGT_SUCCESS_SUBTITLE}</Typography>

      <Link href="/" passHref={true}>
        <Button
          className="mb_1"
          type="button"
          fullWidth
          variant="contained"
          color="primary"
          size="large"
          style={{
            maxHeight: "70px",
            minHeight: "55px",
            textDecoration: "none",
            color: "#ffffff",
          }}
        >
          Go to Login
        </Button>
      </Link>
    </>
  )
}

const ForgotPassword = () => {

  const [formSubmitted, setFormSubmitted] = useState(false);

  /*form handling*/
  const {register, handleSubmit, formState: {errors, isValid, isDirty}} = useForm({
    resolver: yupResolver(FrgtPassFormSchema),
    mode: "onChange"
  });

  /*on form submit*/
  const onSubmit = (frgtPassData) => {
    console.log("Forgot Password Data: "+JSON.stringify(frgtPassData))
    setFormSubmitted(true)
  }

  return (
    <AuthLayout>
      {
        formSubmitted === true ?
        (<ForgotPasswordSuccess />):
        (<>
          <Typography className="title mb_1">{String.FRGT_PASS_TITLE}</Typography>
          <Typography className="subtitle mb_2">{String.FRGT_PASS_SUBTITLE}</Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <EmailField
              {...register("email")}
              error={Boolean(errors.email)}
              helperText={errors.email ? errors.email.message : ""}
            />

            <hr className="mt_2"/>

            <SubmitButton
              className="mt_1 mb_1"
              disabled={!isValid || !isDirty}
            >
              Send Reset Link
            </SubmitButton>
            
          </form>

          <Link href="/" passHref={true}>Back to Login</Link>
        </>)
      }
    </AuthLayout>
  )
}

export default ForgotPassword