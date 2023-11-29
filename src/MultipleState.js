import React, { useState } from 'react'

 function MultipleState() {
    const [data,setData] = useState ({firstName : "Nilaxi", lastName : "Vadhwana", fullName : " "});
    const fullname = () =>{
         setData({...data ,fullName : data.firstName + ". " + data.lastName})
        }
  return (
    <div>
      {data.fullName.split(" ").map((v) => v[0]).join(".")}
      <button onClick={fullname}>Display</button>
    </div>
  )
}
export default MultipleState;