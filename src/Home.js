import React from 'react';
import photos from './Data';

 const Home = () => {
    return (
            <table>
                <tbody>{
                photos.map((v,index) =>{
                    return (<tr key={index}>
                        <td>{v.url}</td>
                        <td>{v.title}</td>
                        <td>{v.id}</td></tr>)
                })
                }
                </tbody>
                </table>

    )
}
export default Home
