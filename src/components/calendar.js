import React from 'react';
import Year from '../containers/year';
import Month from '../containers/month';
import Day from './day';
import yearSelector from '../containers/yearselector'
import monthSelector from '../containers/monthselector'


export default class Calendar extends React.Component{

    state = {
        year: this.props.today.split(' ')[3],
        month: this.props.today.split(' ')[1],
        day: this.props.today.split(' ')[2],
        yearSelect: false,
        monthSelect: false,
    }


    //////////////////////////Testing purposes only
    createFeb = () => {
        let february = []
        for (let n = 0; n < 31; n++){
            february.push(n+1)
        }
        return february;
    }
    //////////////////////////


    createDays = () => {
        return this.createFeb().map((day)=>{
            return < Day key={day + this.state.month + this.state.year} num={day} events={{}} />
        })
    }

    handleClick = (event) => {
        if (this.state.yearSelect !== false || this.state.monthSelect !== false){
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
            
        }
    }

    render(){
        return <div className="calendar" onClick={this.handleClick}>
            <h1>Today is... {this.props.today}</h1>
            < Year year={this.state.year}/>
            {(this.state.yearSelect ? yearSelector() : null)}
            < Month month={this.state.month}/>
            {(this.state.monthSelect ? monthSelector() : null)}
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