import React, { useState } from 'react'
import CMyManagement from './CMyManagement';

export default function CrudOperationH() {
    const [data,setData] = useState ({
        firstName : "",
        lastName : "",
        address:{
            city:"",
            state:""
        }
    });
    const [index,setIndex] = useState(-1);
    const [multipleData,setMultipleData] = useState([]);   
    const  changeValue = (e) =>{
        setData({...data,[e.target.name]:e.target.value})
    }

    const saveInfo = (e) =>{
        e.preventDefault();
        let n = [...multipleData];
        if(index == -1){
        n.push(data);
        }
        else{
         n[index]=data;
        }
        setMultipleData(-1);
        setMultipleData(n);
    }
    const deleteInfo = (index) =>{
        let p = [...multipleData]
        p.splice(index,1);
        setMultipleData(p);

    }
    const editInfo = (index) =>{
        let t = multipleData[index];
        setData({...t})
        setIndex(index);
    }
    
  return (
    <div>
        <form onSubmit={saveInfo}>
            <input type='text' name='firstName' onChange={changeValue} value={data.firstName} /><br/><br/>
            <input type='text' name='lastName'  onChange={changeValue} value={data.lastName}/><br/><br/>
            <label name='address'>Address :</label>
           
            <select onChange={changeValue} value={data.address.city}>
               <option value="Vadodara">Vadodara</option>
                <option value="Ahmedabad">Ahmedabad</option>
                <option value="Banglore">Banglore</option>
            </select>
            <input type="text" name="address" onChange={changeValue} value={data.address.state} /><br/><br/>

            <input type='submit' value='save'/>
        </form>
        <CMyManagement multipleData ={multipleData} 
        deleteInfo = {deleteInfo}
        editInfo = {editInfo}
        />
    </div>
  )
  
}
