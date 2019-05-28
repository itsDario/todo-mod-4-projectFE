import React from 'react'

const Sidebar = (props) => {

    const createEvents = () => {
        return props.events.map(event => {
            return <li key={event.id}>{event.name}</li>
        })
    }

    const createCalendars = () => {
        return props.user.calendars.map(calendar => {
            return <li key={calendar.id}>{calendar.name}</li>
        })
    }

    return <div className='sidebar'>
        <h1>Upcoming Events</h1>
        <ol className='upcoming-events'>
            {createEvents()}
        </ol>
        <h1>Your Calendars</h1>
        <ol className='user-calendars'>
            {createCalendars()}
        </ol>
    </div>
}

export default Sidebar;