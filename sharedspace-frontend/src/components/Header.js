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
                    <input type="submit" value="logout" onClick={this.logout}></input>
                </React.Fragment>
            )
        } else {
            return <h4>Logged Out</h4>
        }
    }

    render(){
        return (
            <div className="sixteen wide column" style={{borderStyle: "solid", borderWidth: "2px"}}>

            <div className="ui grid" >
                <div className="twelve wide column" style={{borderStyle: "solid", borderWidth: "2px"}}>
                    <h1>Shared Space</h1>
                </div>
                <div className="four wide column" style={{borderStyle: "solid", borderWidth: "2px"}}>
                    {this.isLoggedIn()}
                </div>
            </div>

            </div>

        )
    }
}