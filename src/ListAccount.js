import axios from 'axios';
import React, { useEffect, useState } from 'react'
import fetchauth from './customacios';
import authfetch from './interceptor';

export default function ListAccount() {
    const [data,setData] = useState([]);
    let n = JSON.parse(localStorage.getItem("token"))
    useEffect(()=>{
        authfetch.get("/accounts").then(y=>{
                console.log(y.data)
            }).catch(u=>{
                console.log(u);
            })
    },[])
  return (
    <div>ListAccount</div>
  )
}


