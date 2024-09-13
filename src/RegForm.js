import axios, { Axios } from 'axios';
import React, { useState } from 'react'
import { Field, Form, Formik } from 'formik'


 function RegForm() {
  const  [data,setData] = useState({
    firstName: "",
      title : "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      acceptterms: false
});
const handleSubmit = (e) =>{
  e.preventDefault();
  axios.post("https://real-pear-fly-kilt.cyclic.app/accounts/register",data)
  .then(y=>{
      localStorage.setItem("token",JSON.stringify(y.data))   
      console.log(y.data);
      }).catch(y=>{
        console.log(y)
    })
}
const handleInput = (e) =>{
      setData({...data,[e.target.name]: e.target.value})
}

  
    return (
        <div>
          <form onSubmit={handleSubmit}>
            <input type="text" name="firstName" value={data.firstName} onChange={handleInput}></input>
            <input type="text" name="title" value={data.title} onChange={handleInput}></input>
            <input type="text" name="lastName" value={data.lastName} onChange={handleInput}></input>
            <input type="text" name="email" value={data.email} onChange={handleInput}></input>
            <input type="text" name="password" value={data.password} onChange={handleInput}></input>
            <input type="text" name="confirmPassword" value={data.confirmPassword} onChange={handleInput}></input>

            <input type="submit" value="Save"></input>
          </form>
        </div>
          )
    } 

  export default RegForm
  