import React, { Fragment } from 'react'

export default class Day extends React.Component {

    createDay = () => {
        if (this.props.focus) {
            return <span className='focus' id={this.props.day.id}>
                {this.props.day.num}
            </span>
        }
        else {
            return <span className='day' id={this.props.day.id}>
                {this.props.day.num}
                <br />
                {this.props.events.length !== 0 ? this.eventMap() : ' '}
            </span>
        }
    }

    render() {
        return < Fragment >
            {this.createDay()}
        </Fragment>
    }

    eventMap() {
        return this.props.events.map(e => <div className='eventName'>{e.name}</div>)
    }
}