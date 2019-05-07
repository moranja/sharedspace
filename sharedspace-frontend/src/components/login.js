import React, { Component } from 'react'
import {initSocket} from './ioConnection'

export default class Login extends Component {

    state = {
        "username": "",
        "password": "",
        "failType": ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    submitUser = (e) => {
        e.persist()
        e.preventDefault()
        fetch('http://localhost:3001/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then(res => res.json())
        .then(response => {
            if (typeof response === "object") {
                localStorage.setItem('token', response.token)
                localStorage.setItem('name', response.username)
                localStorage.setItem('userID', response.id)
                this.props.login()
                this.setState({"failType": ""})
                initSocket()
            } else {
                this.setState({"failType": response })
            }
        })
    }

    render(){
        return(
            <div >
                <h4>Please log in</h4>
                <div>
                    <form onSubmit={(e) => this.submitUser(e)} className="ui input">
                        <label classNa="ui label">Username: &nbsp;</label>
                        <input type="text" id="username" placeholder="&nbsp;name" onChange={(e) => this.handleChange(e)} ></input>{
                            (this.state.failType === "Username") ? <h4 style={{color: "red", display: "inline"}}>&nbsp;&nbsp;Username does not exist. Please Create User to register.</h4> : null
                            }
                        <label>Password: &nbsp;</label>
                        <input type="password" id="password" placeholder="&nbsp;password" onChange={(e) => this.handleChange(e)}></input>{
                            (this.state.failType === "Password") ? <h4 style={{color: "red", display: "inline"}}>&nbsp;&nbsp;Password was entered incorrectly.</h4> : null
                            }

                        <input type="submit" className="ui black basic button"></input>
                    </form>
                    <form onSubmit={(e) => this.createUser(e)} >
                        <input type="submit" value="Create User" onClick={e => this.props.createUser(e)} className="ui black basic button"></input>
                    </form>
                </div>
            </div>
        )
    }
}
