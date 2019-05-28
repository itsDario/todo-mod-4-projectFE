import React from 'react'

export default class Day extends React.Component{

    // selectDay = () => {
    //     return console.log(this.props.num)
    // }

    render(){
        return <span className='day' id={this.props.day.id}>
            {this.props.day.num}
        </span>
    }
}