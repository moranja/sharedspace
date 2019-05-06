import React, { Component } from 'react'

export default class Login extends Component {

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
        fetch('http://localhost:3001/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then(res => res.json())
        .then(response => {
                if (response !== "Login failed"){
                    localStorage.setItem('token', response.token)
                    localStorage.setItem('name', response.username)
                    this.props.login()
                } else {
                    console.log("the server rejected your credentials")
                }
        })

    }

    testComms = (e) => {
        e.persist()
        e.preventDefault()
        // console.log(this.state)
        // fetch('http://localhost:3001/')
        // .then(res => res.json())
        // .then(response => console.log(response))
    }


    render(){
        // console.log(this.state)
        return(
            <div>
                <h4>Please log in</h4>
                <form onSubmit={(e) => this.submitUser(e)}>
                    <label>Username:</label>
                    <input type="text" id="username" placeholder="name" onChange={(e) => this.handleChange(e)}></input>
                    <br></br>
                    <br></br>
                    <label>Password:</label>
                    <input type="password" id="password" placeholder="password" onChange={(e) => this.handleChange(e)}></input>
                    <br></br>
                    <br></br>
                    <input type="submit"></input>
                </form>
                    <br></br>
                    <br></br>
                <form onSubmit={(e) => this.testComms(e)}>
                    <input type="submit" value="Test Comms"></input>
                </form>

            </div>
        )
    }
}