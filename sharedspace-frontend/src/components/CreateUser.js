import React, { Component } from 'react'

export default class CreateUser extends Component {

    state = {
        "username": "",
        "password": ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    submitUser = (e) => {
        e.persist()
        e.preventDefault()
        fetch('http://localhost:3001/createUser', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then(res => res.json())
        .then(response => {
            localStorage.setItem('token', response.token)
            localStorage.setItem('name', response.username)
            localStorage.setItem('id', response.id)
            this.props.login()
        })

    }

    render(){
        return(
            <div className="ui form">
                <h3>&nbsp;&nbsp;Please provide a username and password to register:</h3>
                <div className="fields">
                    <div className="field">
                        <input type="text" id="username" placeholder="&nbsp;username" onChange={(e) => this.handleChange(e)} ></input>{
                            (this.state.failType === "Username") ? <h4 style={{color: "red", display: "inline"}}>&nbsp;&nbsp;Username does not exist. Please Create User to register.</h4> : null
                            }
                    </div>
                    <div className="field">
                        <input type="password" id="password" placeholder="&nbsp;password" onChange={(e) => this.handleChange(e)}></input>{
                            (this.state.failType === "Password") ? <h4 style={{color: "red", display: "inline"}}>&nbsp;&nbsp;Password was entered incorrectly.</h4> : null
                            }
                    </div>
                    <div className="field">
                        <input type="submit" className="ui black basic button" onClick={(e) => this.submitUser(e)}></input>
                    </div>
                </div>
            </div>
        )
    }
}
