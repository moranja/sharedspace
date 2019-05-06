import React, {Component} from 'react'

export default class MusicView extends Component{




    render(){
        return(
            <div>
                <img src={require("../media/musicSheet.png")} alt="music sheet" width="50%" style={{align: "center"}}></img>
            </div>
        )
    }


}