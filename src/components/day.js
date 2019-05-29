import React, { Fragment } from 'react'

export default class Day extends React.Component{

    render(){
        return <span className={this.props.focus ? 'focus' : 'day'} id={this.props.day.id}>
            {this.props.day.num}
        </span>

    }
}