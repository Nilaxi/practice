import React, { useState } from 'react'

export default function Formfunction() {

    const [data,setData] = useState({
        firstName : "",
        lastName : ""
    });
    const handleInput = (e) => {
            setData({...data,[e.target.name] : e.target.value})
    }

    const saveInfo = (e) => {
        e.preventDefault();
        console.log(data);
    }
     const handleInputForFirstName =(e) =>{
             setData({...data,firstName :e.target.value})
     }
     const handleInputForLastName = (e) =>{
             setData({...data,lastName :e.target.value}) 
        }
  return (
    <form onSubmit ={saveInfo} >
        <input type="text" name="firstName" placeholder='enter your FirstName' onChange={handleInput}></input>
        <input type="text" name="lastName" placeholder='enter your LastName' onChange={handleInput}></input>
        <input type="submit" value="Save"></input>
    </form>
  )
}
