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
            <div>
                <h4>Please provide a username and password to register</h4>
                <form onSubmit={(e) => this.submitUser(e)}>
                    <label>Username: &nbsp;</label>
                    <input type="text" id="username" placeholder="&nbsp; name" onChange={(e) => this.handleChange(e)}></input>
                    <br></br>
                    <br></br>
                    <label>Password: &nbsp;</label>
                    <input type="password" id="password" placeholder="&nbsp; password" onChange={(e) => this.handleChange(e)}></input>
                    <br></br>
                    <br></br>
                    <input type="submit"></input>
                </form>
                    <br></br>
                    <br></br>
            </div>
        )
    }
}