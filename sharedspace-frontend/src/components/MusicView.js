import React, {Component} from 'react'

export default class MusicView extends Component{




    render(){
        return(
            <div>
                Music View
                <img src={require("../media/musicSheet.png")} alt="music sheet" height="200px"></img>
            </div>
        )
    }


}