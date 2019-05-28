import React from 'react';
import Year from '../containers/year';
import Month from '../containers/month';
import Day from './day';
import YearSelector from '../containers/yearselector';
import MonthSelector from '../containers/monthselector';


export default class Calendar extends React.Component{

    state = {
        year: this.props.today.split(' ')[3],
        month: this.props.today.split(' ')[1],
        // day: this.props.today.split(' ')[2],
        yearSelect: false,
        monthSelect: false,
    }


    //////////////////////////Testing purposes only
    createMay = () => {
        let may = []
        for (let n = 0; n < 31; n++){
            let date = new Date(`may ${n+1}, 2019`)
            may.push({id: date, num: n+1, events: []})
        }
        return may;
    }
    //////////////////////////


    createDays = () => {
        return this.createMay().map((day)=>{
            return < Day key={day.id.getTime()} day={{...day}} />
        })
    }

    createYearSelector = () => {
        if (this.state.yearSelect){
            return < YearSelector /> 
        }
        else{
            return null
        }
    }

    createMonthSelector = () => {
        if (this.state.monthSelect){
            return < MonthSelector /> 
        }
        else{
            return null
        }
    }

    handleClick = (event) => {
        if (this.state.yearSelect !== false || this.state.monthSelect !== false || this.state.daySelect !== false){
            this.setState({
                yearSelect: false,
                monthSelect: false,
            })
        }

        if (event.target.className === 'yearbut'){
            this.setState({yearSelect: !this.state.yearSelect})
        }
        else if (event.target.className === 'monthbut'){
            this.setState({monthSelect: !this.state.monthSelect})
        }
        else if (event.target.className === 'day'){
            this.setState({daySelect: !this.state.daySelect,}, this.props.toggleDayDock(event.target.id))
        }
    }

    render(){
        return <div className="calendar" onClick={this.handleClick}>
            <h1>Today is... {this.props.today}</h1>
            < Year year={this.state.year}/>
            {this.createYearSelector()}
            < Month month={this.state.month}/>
            {this.createMonthSelector()}
            <div className='days-container'>
                {this.createDays()}
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