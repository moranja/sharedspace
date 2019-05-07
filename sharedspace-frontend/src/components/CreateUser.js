import React, { Component } from 'react'

export default class CreateUser extends Component {

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
        console.log(this.state.password.length)
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
            console.log(response)
            this.setState({"failType": response.validationError})
            // localStorage.setItem('token', response.token)
            // localStorage.setItem('name', response.username)
            // localStorage.setItem('id', response.id)
            // this.props.login()
        })

    }

    render(){
        console.log(this.state)
        return(
            <div className="ui form">
                <h3>&nbsp;&nbsp;Please provide a username and password to register:</h3>
                <div className="three fields">
                    <div className="field">
                        <input type="text" id="username" placeholder="&nbsp;username" onChange={(e) => this.handleChange(e)} style={{width: "100%"}}></input>{
                            (this.state.failType === "username") ? <h4 className="ui pointing red basic label" style={{color: "red", display: "inline"}}>&nbsp;&nbsp;Must be unique and 3 or more characters.</h4> : null
                            }
                    </div>
                    <div className="field">
                        <input type="password" id="password" placeholder="&nbsp;password" onChange={(e) => this.handleChange(e)}></input>{
                            (this.state.failType === "password") ? <h4 className="ui pointing red basic label" style={{color: "red", display: "inline"}}>&nbsp;&nbsp;Password was entered incorrectly.</h4> : null
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
