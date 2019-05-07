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
            this.setState({"failType": response.validationError})
            if (response.validationError === undefined){
                this.setState({"failType": ""})
                localStorage.setItem('token', response.token)
                localStorage.setItem('name', response.username)
                localStorage.setItem('id', response.id)
                this.props.login()
            } else {
                this.setState({"failType": response.validationError})
            }
        })
    }

    render(){
        return(
            <div className="ui form">
                <h3>&nbsp;&nbsp;Please provide a username and password to register:</h3>
                <div className="fields">
                    <div className="field">
                        <input type="text" id="username" placeholder="&nbsp;username" onChange={(e) => this.handleChange(e)} style={{width: "100%"}}></input>
                            <div>
                                {(this.state.failType === "username") ? <h4 className="ui pointing red basic label" style={{color: "red", display: "inline"}}>&nbsp;&nbsp;Must be unique and 3 or more characters.</h4> : null}
                            </div>
                    </div>
                    <div className="field">
                        <input type="password" id="password" placeholder="&nbsp;password" onChange={(e) => this.handleChange(e)}></input>
                            <div>
                                {(this.state.failType === "password") ? <h4 className="ui pointing red basic label" style={{color: "red", display: "inline"}}>&nbsp;&nbsp;Password was entered incorrectly.</h4> : null}
                            </div>
                    </div>
                    <div>
                        <input type="submit" className="ui black basic button" onClick={(e) => this.submitUser(e)}></input>
                    </div>
                </div>
            </div>
        )
    }
}
