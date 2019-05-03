import React, {Component} from 'react'

export default class Header extends Component {

    logout = () =>{
        localStorage.clear()
        this.props.logout()
    }

    render(){
        console.log(this.props)
        return (
            <div>
                <input type="submit" value="logout" onClick={this.logout}></input>
                <br></br>
                <br></br>
            </div>
        )
    }
}