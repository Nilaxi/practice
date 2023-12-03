import React from 'react'

export default function CMyManagement(props) {
  return (
    <div>
            <table>
                <tbody>
            {
                props.multipleData.map((v,index) => {

                    return(<tr><td>{v.firstName}</td>
                    <td>{v.lastName}</td>
                    <td>{v.address.city}</td>
                    <td>{v.address.state}</td>
                    <td><button onClick={() => {props.deleteInfo(index)}}>Delete</button></td>
                    <td><button onClick={() => {props.editInfo(index)}}>Edit</button></td></tr>)
                })
            }
            </tbody>
        </table>
    </div>
  )
}
