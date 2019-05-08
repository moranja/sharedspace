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
            <div className="ui form">
                <h3>&nbsp;&nbsp;Please log in:</h3>
                <div className="fields">
                    <div className="field">
                        <input type="text" id="username" placeholder="&nbsp;username" onChange={(e) => this.handleChange(e)} ></input>
                            <div>
                                {(this.state.failType === "Username") ? <h4 className="ui pointing red basic label" style={{color: "red", display: "inline"}}>&nbsp;&nbsp;Username does not exist. Please Create User to register.</h4> : null}
                            </div>
                    </div>
                    <div className="field">
                        <input type="password" id="password" placeholder="&nbsp;password" onChange={(e) => this.handleChange(e)}></input>
                            <div>
                                {(this.state.failType === "Password") ? <h4 className="ui pointing red basic label"  style={{color: "red", display: "inline"}}>&nbsp;&nbsp;Password was entered incorrectly.</h4> : null}
                            </div>
                    </div>
                    <div className="field">
                        <input type="submit" className="ui black basic button" onClick={(e) => this.submitUser(e)}></input>
                    </div>
                    <div className="field">
                        <input type="submit" value="Create User" onClick={(e) => this.props.createUser(e)} className="ui black basic button"></input>
                    </div>
                </div>
            </div>
        )
    }
}
