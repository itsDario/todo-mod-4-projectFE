import React from 'react'
import Day from './day'

export default class Month extends React.Component{

    state = {
        month: this.props.today.split(' ')[1]
    }

    // createDays = () => {
    //     return <div></div>
    // }

    render(){
        return <div className='month'>
            {this.state.month}
            {/* {this.createDays()} */}
        </div>
    }
}