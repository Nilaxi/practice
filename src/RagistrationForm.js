import { Field, Form, Formik } from 'formik'
import React from 'react'

export default function RagistrationForm() {
  const n = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptterms: false
  }
  return (
    <div>
      <h2>SignUp Form</h2>
      <Formik initialValues={n}
        onSubmit={(values) => {
          console.log(values)
        }}>
        <Form>
          <label htmlFor='firstName'>FirstName</label>
          <Field id="firstName" name="firstName" placeholder="Please enter your Fullname"></Field><br></br>
          <lable htmlFor='lastName'>LastName</lable>
          <Field id="lastName" name="lastName" placeholder="Please enter your Username"></Field><br></br>
          <lable htmlFor='email'>Email</lable>
          <Field id="email" name="email" placeholder="Please enter your Email"></Field><br></br>
          <lable htmlFor='password'>Password</lable>
          <Field id="password" name="password" placeholder="Please enter your password"></Field><br></br>
          <lable htmlFor='confirmPassword'>ConfirmPassword</lable>
          <Field id="confirmPassword" name="confirmPassword" placeholder="Please enter your ConfirmPassword"></Field><br></br>
          <label htmlFor='acceptterms'><Field type="checkbox" name="acceptterms" />AcceptTerms</label><br></br><br></br>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  )

}
