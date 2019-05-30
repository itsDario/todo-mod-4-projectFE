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
        yearSelect: false,
        monthSelect: false,
        daySelect: false,
    }


    //////////////////////////Testing purposes only
    createMay = () => {

        let monthDays = ['31', '28', '31', '30', '31', '30', '31', '31', '30', '31', '30', '31']

        let may = []
        for (let n = 0; n < monthDays[this.monthAsInt()]; n++) {
            let date = new Date(`${this.state.month} ${n + 1}, 2019`)
            may.push({ id: date, num: n + 1, events: [] })
        }
        return may;
    }
    //////////////////////////

    setMonth = (nmonth) => {
        this.setState({
            month: nmonth
        })
    }

    monthAsInt = () => {
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        return months.indexOf(this.state.month)
    }

    createDays = (spotlight) => {

        let days = this.createMay().map((day) => {
            if (!!day) {
                if (spotlight === day.id.getTime()) {
                    return < Day key={day.id.getTime()} day={{ ...day }} focus={true} events={this.props.events.filter(event => parseInt(event.date) === day.id.getTime())} />
                }
                else {
                    return < Day key={day.id.getTime()} day={{ ...day }} focus={false} events={this.props.events.filter(event => parseInt(event.date) === day.id.getTime())} />
                }
            }    
        })
        let empty1 = days[0].props.day.id.getDay()
        let empty2 = days[days.length-1].props.day.id.getDay()

        for(let n = 0; n < empty1; n++){
            days.unshift(<span className='day null' id='' />);
        }
        for(let n = 0; n < 6-empty2; n++){
            days.push(<span className='day null' id='' />)
        }
        return days

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
            return < MonthSelector setMonth={this.setMonth} />
        }
        else {
            return null
        }
    }

    handleClick = (event) => {
        this.setState({
            yearSelect: false,
            monthSelect: false,
            daySelect: false,
        })
        

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
            <h2 className='current'>Today is... {this.props.today}</h2>
            < Year year={this.state.year} />
            {this.createYearSelector()}
            < Month month={this.state.month} />
            {this.createMonthSelector()}
            <Daynames />
            <div className='days-container'>
                {this.createDays(this.props.spotlight)}
            </div>
        </div>
    }

}



// daysArr = ['31', '28', '31', '30', '31', '30', '31', '31', '30', '31', '30', '31']
// monthsArr = ['January',' February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
// monthsShortArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']