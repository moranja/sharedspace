import React, {Component} from 'react'

export default class Header extends Component {
    isLoggedIn= () => {
if (localStorage.name){
    return (
        <React.Fragment>
            <h4 style={{textAlign: "right", verticalAlign: "middle"}} >Logged in as {localStorage.name}</h4>
            <input type="submit" value="logout" onClick={this.props.logout} className="ui black basic button"></input>
        </React.Fragment>
    )
} else {
    return <h4 style={{textAlign: "right", verticalAlign: "middle"}}>Logged Out</h4>
}
    }

    isInARoom = () => {
      if (this.props.roomID) {
        return (
          <React.Fragment>
            <div className="four wide column" align="middle">
                <img src={require("../media/logo.png")} alt="piano keyboard" width="50%"></img>
            </div>
            <div className="eight wide column" style={{borderLeft: "solid 0.5px"}} align="right">
                <h2>Change Room Mode</h2>
                <select onChange={(e) => this.props.handleChange(e, "mode")} className="ui compact selection dropdown">
                    <option value="music">Music</option>
                    <option value="chat">Chat</option>
                    <option value="video">Video</option>
                </select>
            </div>
          </React.Fragment>
        )
      } else {
        return (
            <React.Fragment>
                <div className="four wide column" align="middle">
                    <img src={require("../media/logo.png")} alt="piano keyboard" width="50%"></img>
                </div>
                <div className="eight wide column" >
                </div>
            </React.Fragment>
        )
      }
    }

    render(){
        return (
            <div className="sixteen wide column" style={{borderBottom: "solid 0.5px", borderWidth: "0.5px", }}>

                <div className="ui grid" >
                    {this.isInARoom()}
                    <div className="four wide column" align="right" style={{borderLeft: "solid 0.5px"}} >
                        {this.isLoggedIn()}
                    </div>
                </div>

            </div>

        )
    }
}
