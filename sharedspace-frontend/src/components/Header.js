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
                    <h4 style={{textAlign: "right", verticalAlign: "middle"}} >Logged in as {localStorage.name}</h4>
                    <input type="submit" value="logout" onClick={this.logout} class="ui black basic button"></input>
                </React.Fragment>
            )
        } else {
            return <h4 style={{textAlign: "right", verticalAlign: "middle"}}>Logged Out</h4>
        }
    }

    render(){
        return (
            <div className="sixteen wide column" style={{borderStyle: "solid", borderWidth: "0.5px", }}>

                <div className="ui grid" >
                    <div className="four wide column" style={{borderStyle: "solid", borderWidth: "0.5px"}}>
                        <h1 style={{textAlign: "center", verticalAlign: "middle"}}>Shared Space</h1>
                    </div>
                    <div className="eight wide column" style={{borderStyle: "solid", borderWidth: "0.5px"}}>
                        <h3 style={{display: "inline"}}>Change Room Mode</h3>
                        <select onChange={(e) => this.props.handleChange(e, "mode")} class="ui selection dropdown" style={{display: "inline"}}>
                            <option value="chat">Chat</option>
                            <option value="music">Music</option>
                            <option value="video">Video</option>
                        </select>
                    </div>
                    <div className="four wide column" style={{borderStyle: "solid", borderWidth: "0.5px", verticalAlign: "middle"}} align="right" >
                        {this.isLoggedIn()}
                    </div>
                </div>

            </div>

        )
    }
}
