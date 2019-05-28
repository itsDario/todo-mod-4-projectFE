import React, { Fragment } from 'react'

export default class DayDock extends React.Component {

    state = {
        form: false,
        date: new Date(this.props.spotlight),
        events: [],
    }

    createOptions = () => {
        return this.props.calendars.map((calendar)=>{
            return <option key={calendar.id} value={calendar.id}>
                {calendar.name}
            </option>
        })
    }

    createEvents = () => {
        debugger;
        return this.props.events.map(
            event=><li key={event.id}>Name: {event.name}</li>
        )
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
                <form className='events-form' onSubmit={(e) => this.props.addEvent(e, this.state.date)}>
                    <label>Name</label><br />
                    <input name='name' type='text' placeholder='Enter event name here...' /><br /><br />
                    <label>Description</label><br />
                    <textarea name='desc' placeholder='(Optional) Enter event description here...' /><br /><br />
                    <label>Calendar</label><br/>
                    <select name='calendar-select'>
                        {this.createOptions()}
                    </select><br/><br/>
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