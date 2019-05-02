import React, {Component} from 'react'
import ViewContainer from './ViewContainer'
import InstrumentContainer from './InstrumentContainer'

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