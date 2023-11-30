import React, { Component } from 'react'

export default class FormInClass extends Component {
    state = {
        firstName : "",
        lastName : "",
        address : "",
        city : ""
    }
    handler = (e)=>{
            this.setState({...this.state,[e.target.name]: e.target.value})
    }
    saveInfo = (e) =>{
            e.preventDefault();
            console.log(this.state)
    }
  render() {
    return (
      <form onSubmit={this.saveInfo}>
            <input type="text" name="firstName" onChange={this.handler}></input>
            <input type="text" name="lastName" onChange={this.handler}></input>
            <input type="text" name="address" onChange={this.handler}></input>
            <select name="city" onChange={this.handler}>
                <option value="Ahmedabad">Ahmedabad</option>
                <option value="Baroda">Baroda</option>
            </select>
            <input type="Submit" value="Save" ></input>

      </form>
    )
  }
}
