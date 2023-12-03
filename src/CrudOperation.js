import React, { useState } from 'react'

export default function CrudOperation() {
   const [data,setData]= useState({ 
        firstName : "",
        lastName : ""
    });
    const [index,setIndex] = useState(-1);
    const [multipleData,setMultipleData] = useState([]);
        
    const changeValue = (e) =>{
            setData({...data,[e.target.name]:e.target.value})
    }
    const saveInfo = (e) =>{
        e.preventDefault();
        let p = [...multipleData];
        if(index == -1){
            p.push(data);
        }
        else{
            p[index] = data;
        }
        
        setIndex(-1);
        setMultipleData(p);

    }
    const deleteInfo = (index) =>{
            let p = [...multipleData];
            p.splice(index,1);
            setMultipleData(p);
    }
    const editInfo = (index) =>{
            let n = multipleData[index];
            setData({...n});
            setIndex(index);
    }
  return (
    <div>
        <form onSubmit={saveInfo}>
            <input type="text" name="firstName" onChange={changeValue} value={data.firstName}></input>
            <input type="text" name="lastName" onChange={changeValue} value={data.lastName}></input>
            <br></br>
            <br></br>
            <input type="submit" value="Save"></input>
        </form>
        <table>
            {
                multipleData.map((v,index)=>{
                    return(<tr><td>{v.firstName}</td>
                                <td>{v.lastName}</td>
                                <td><button onClick={()=>{
                                    deleteInfo(index)
                                }}>Delete</button></td>
                                <td><button onClick={()=>{
                                    editInfo(index)
                                }}>Edit</button></td>   
                            </tr>)
                })
            }
        </table>
    </div>
  )

}
