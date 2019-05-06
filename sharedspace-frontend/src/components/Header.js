import React, {Component} from 'react'

export default class Header extends Component {

    logout = () =>{
        localStorage.clear()
        this.props.logout()
    }

    isLoggedIn= () => {
        if (localStorage.name){
            return (
                <React.Fragment>
                    <h4>Logged in as {localStorage.name}</h4>
                    <br></br>
                    <br></br>
                    <input type="submit" value="logout" onClick={this.logout}></input>
                </React.Fragment>
            )
        } else {
            return <h4>Logged Out</h4>
        }
    }

    render(){
        return (
            <div>
                {this.isLoggedIn()}
                <br></br>
            </div>
        )
    }
}