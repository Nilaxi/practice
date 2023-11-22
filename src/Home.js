import React, { useState } from 'react';
import t from './Data';

const Home = () => {
    
    return (
    <> 

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
