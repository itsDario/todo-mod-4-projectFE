import React from 'react';
import Year from '../containers/year';
import Month from '../containers/month';
import Day from './day';
import YearSelector from '../containers/yearselector';
import MonthSelector from '../containers/monthselector';
import Daynames from '../containers/daynames'


export default class Calendar extends React.Component {

    state = {
        year: this.props.today.split(' ')[3],
        month: this.props.today.split(' ')[1],
        // day: this.props.today.split(' ')[2],
        yearSelect: false,
        monthSelect: false,
        daySelect: false,
    }


    //////////////////////////Testing purposes only
    createMay = () => {
        let may = []
        for (let n = 0; n < 31; n++) {
            let date = new Date(`may ${n + 1}, 2019`)
            may.push({ id: date, num: n + 1, events: [] })
        }
        return may;
    }
    //////////////////////////


    // events={this.state.events.filter(event => parseInt(event.date) === this.state.spotlight.getTime())}



    createDays = (spotlight) => {
        return this.createMay().map((day) => {
            if (!!day) {
                if (spotlight === day.id.getTime()) {
                    return < Day key={day.id.getTime()} day={{ ...day }} focus={true} events={this.props.events.filter(event => parseInt(event.date) === day.id.getTime())} />
                }
                else {
                    return < Day key={day.id.getTime()} day={{ ...day }} focus={false} events={this.props.events.filter(event => parseInt(event.date) === day.id.getTime())} />
                }
            }
        })
    }

    createYearSelector = () => {
        if (this.state.yearSelect) {
            return < YearSelector />
        }
        else {
            return null
        }
    }

    createMonthSelector = () => {
        if (this.state.monthSelect) {
            return < MonthSelector />
        }
        else {
            return null
        }
    }

    handleClick = (event) => {
        // if (this.state.yearSelect !== false || this.state.monthSelect !== false || this.state.daySelect !== false) {
        this.setState({
            yearSelect: false,
            monthSelect: false,
            daySelect: false,
        })
        // }

        if (event.target.className === 'yearbtn') {
            this.setState({ yearSelect: true }, this.props.toggleDayDock)
        }
        else if (event.target.className === 'monthbtn') {
            this.setState({ monthSelect: true }, this.props.toggleDayDock)
        }
        else if ((event.target.className === 'day' || event.target.className === 'focus') && event.target.className !== 'null') {
            this.setState({ daySelect: true }, this.props.toggleDayDock(event.target.id))
        }
    }

    render() {
        return <div className="calendar" onClick={this.handleClick}>
            <h2>Today is... {this.props.today}</h2>
            < Year year={this.state.year} />
            {this.createYearSelector()}
            < Month month={this.state.month} />
            {this.createMonthSelector()}
            <Daynames />

            <div className='days-container'>
                <span className='day null' id=''>
                </span>
                <span className='day null' id=''>
                </span>
                <span className='day null' id=''>
                </span>
                {this.createDays(this.props.spotlight)}
            </div>
        </div>
    }

}

// Calendar.defaultProps = {
//     date: Date(Date.now())
// }

// export default Calendar


// months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
// days = ['31', '28', '31', '30', '31', '30', '31', '31', '30', '31', '30', '31']