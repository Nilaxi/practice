import React, { useState } from 'react';
import t from './Data';

const Home = () => {
    let [data,setData] = useState(0);
    const inc = () => {
        setData(data+1);
    }
    let [data1,setData1] = useState(0);
    const Sub = () => {
     setData1(data1-1);
    }
    let [data2,setData2] = useState(2);
    const multiply = () => {
     setData2(data2*2);
    }
    return (
    <> 
    {data}
     <button onClick={inc}>Plus</button>
    
     {data1}
     <button onClick={Sub}>Sub</button>

     {data2}
     <button onClick={multiply}>Multiply</button>

    
    


    <table>
        
        <tbody>
        {
        
            t.map((v,index)=>{

                return (<tr key={index}>
                     <td>{v.albumId}</td>
                    <td>{v.id}</td>
                    <td><img width={'50px'} src  = {v.url}></img></td>
                    <td><img width={'50px'} src  = {v.thumbnailUrl}></img></td>
                    <td>{v.title}</td>
                    
                    </tr>)

            })
        
        }
        
        </tbody>
        </table>

        </>
  )
}
export default Home;
