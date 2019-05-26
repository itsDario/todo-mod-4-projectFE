import React from 'react';
import Year from '../components/year';
import Month from '../components/month';


const Calendar = (props) => {

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const days = ['31', '28', '31', '30', '31', '30', '31', '31', '30', '31', '30', '31']

    // const createDays = () => {
    //     return 
    // }

    return <div className="calendar">
        <h1>Today is...{props.date}</h1>
        < Year />
        < Month />
    </div>
}

export default Calendar

Calendar.defaultProps = {
    date: Date(Date.now())
}