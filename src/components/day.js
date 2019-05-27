import React from 'react'

export default class Day extends React.Component{

    // selectDay = () => {
    //     return console.log(this.props.num)
    // }

    render(){
        return <span className='day' onClick={null}>
            {this.props.num}
        </span>
    }
}