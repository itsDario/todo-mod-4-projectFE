import React from 'react'

export default class Day extends React.Component {

    render() {
        console.log(this.props);

        return <span className='day' id={this.props.day.id}>
            {this.props.day.num}
            <br />
            {this.props.events.length !== 0 ? this.eventMap() : ' '}
        </span>
    }

    eventMap() {
        return this.props.events.map(e => <div className='eventName'>e.name</div>)
    }
}