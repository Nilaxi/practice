import React, { Component } from 'react'

 class DisplayAPIwithClass extends Component {
    state = {
        data : []
    }
componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/albums")
    .then(y =>y.json())
    .then(y => {
        this.setState({...this.setState,data:y})    
})
}
render(){
    return (
        <table>{this.state.data.map((v)=>{
            return(<tr><td>{v.userId}</td>
                            <td>{v.id}</td>
                            <td>{v.title}</td>
                            </tr>)
            })}
        </table>
    )
    }
}
export default DisplayAPIwithClass;