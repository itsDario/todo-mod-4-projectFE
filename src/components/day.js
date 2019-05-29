import React from 'react'

export default class Day extends React.Component{

    render(){
        return <span className='day' id={this.props.day.id}>
            {this.props.day.num}
        </span>
    }
}