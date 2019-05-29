import React, { Fragment } from 'react'

export default class Day extends React.Component {

    render() {
        return <span className={this.props.focus ? 'focus' : 'day'} id={this.props.day.id}>
            {this.props.day.num}
            <br />
            <span className='eventName'>{this.props.events.length !== 0 ? `${this.props.events.length} Events` : ' '}</span>
        </span>

    }

    eventMap() {
        return this.props.events.map(e => <div className='eventName'>{e.name}</div>)
    }
}