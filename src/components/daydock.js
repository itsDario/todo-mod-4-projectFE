import React, { Fragment } from 'react'

export default class DayDock extends React.Component {

    state = {
        form: false,
        date: new Date(this.props.spotlight),
        events: [],
    }

    componentDidMount(){
        this.setState({
            events: this.props.events
        })
    }

    // componentDidUpdate(prevProps){
    //     if (this.props.events !== prevProps.events)
    //     this.setState({
    //         events: this.props.events
    //     })
    // }

    createOptions = () => {
        return this.props.calendars.map((calendar) => {
            return <option key={calendar.id} value={calendar.id}>
                {calendar.name}
            </option>
        })
    }

    createEvents = () => {
        return this.state.events.map((event)=>{
            // debugger;
            return <li key={event.id}>
                <div>Name: {event.name}</div>
                <div>{event.description === null ? 'No Description' : `Description: ${event.description}`}</div>
                </li>
        })
    }

    submitEvent = (event) => {
        event.preventDefault()
        event.persist()

        this.props.addEvent(event)
        this.setState({
            form: false,
            events: [...this.state.events, {user: 1, calendar: 1, date: this.state.date, description: event.target.desc.value, name: event.target.name.value}]
        })
        return null
    }

    handleClick = () => {
        this.setState({
            form: !this.state.form
        })
    }

    showDock = () => {
        if (!this.state.form) {
            return <Fragment>
                <h2>{this.state.date.toDateString()}</h2>
                <h2> Events </h2>
                <ul className='events-list'>
                    {this.createEvents()}
                </ul>
                <button className='create-event' onClick={this.handleClick}>Create Event</button>
            </Fragment>
        }
        else if (this.state.form) {
            return <Fragment>
                <h2>Create New Event</h2>
                <form className='events-form' onSubmit={this.submitEvent}>
                    <label>Name</label><br />
                    <input name='name' type='text' placeholder='Enter event name here...' /><br /><br />
                    <label>Description</label><br />
                    <textarea name='desc' placeholder='(Optional) Enter event description here...' /><br /><br />
                    <label>Calendar</label><br />
                    <select name='calendar-select'>
                        {this.createOptions()}
                    </select><br /><br />
                    <input type='submit' value='submit' />
                </form>
            </Fragment>
        }
    }

    render() {
        return <div className='daydock'>
            {this.showDock()}
        </div>
    }
}