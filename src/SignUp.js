import { Field, Formik } from 'formik'
import React from 'react'

export default function SignUp() {
    let n = {
        firstName: "",
        lastName: "",
        email: ""
    }
    return (
        <div>
            <h1>SignUp</h1>
            <Formik initialValues={n}
                onSubmit={(values) => {
                    console.log(values);
                }} >
                <form>
                    <label>FirstName</label>
                    <Field id="firstName" name="firstName" placeholder="Enter your firstname"></Field>
                    <label>LastName</label>
                    <Field id="lastName" name="lastName" placeholder="Enter your lastName"></Field>
                    <label>Email</label>
                    <Field id="email" name="email" placeholder="Enter your email"></Field>
                    <button type='submit'>Submit</button>
                </form>
            </Formik>
        </div>
    )
}
