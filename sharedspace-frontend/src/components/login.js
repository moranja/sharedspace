import React, { Component } from 'react'

export default class Login extends Component {




    render(){
        return(
            <div>
                <h4>Please log in</h4>
                <form>
                    <label>Username:</label>
                    <input type="text" id="username" placeholder="name"></input>
                    <br></br>
                    <br></br>
                    <label>Password:</label>
                    <input type="password" id="password" placeholder="password"></input>
                </form>

            </div>
        )
    }
}