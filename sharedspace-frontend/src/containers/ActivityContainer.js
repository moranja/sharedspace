import React, {Component} from 'react'
import ViewContainer from 'react'
import InstrumentContainer from 'react'

export default class ActivityContainer extends Component{




    render(){
        return(
            <div>
                Activity Container
                <ViewContainer />
                <InstrumentContainer />
            </div>
        )
    }


}