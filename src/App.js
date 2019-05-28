import React from 'react';
import './App.css';
import Navbar from './containers/navbar'
import Sidebar from './containers/sidebar'
import Calendar from './components/calendar'
import DayDock from './components/daydock'

export default class App extends React.Component {

  state = {
    today: Date(Date.now()),
    menuBtn: false,
    user: {
      name: 'Pidgey',
      events: [{id: 1, name: 'Terrorize New Pokemon Trainers'}, {id: 2, name: 'Event 2'}, {id: 3, name: 'Event 3'}, {id: 4, name: 'Event 4'}, {id: 5, name: 'Event 5'}], //Objects? IDs?
    },
    calendars: [{id: 1, name: 'Personal Calendar'}, {id: 2, name: 'General Workspace Calendar'}, {id: 3, name: 'Project 1 Calendar'}, {id: 4, name: 'Project 2 Calendar'}, {id: 5, name: 'Pidgey Mating Season'}], //Objects? IDs?
    sidebar: false,
    createCalendar: false,
    daydock: false,
    spotlight: '',
  }

  componentDidMount(){
    this.interval = setInterval(()=>{this.setState({today: Date(Date.now())})}, 1000)
  }
  
  hamburgerBtn = () => {
    this.setState({
      menuBtn: !this.state.menuBtn,
      sidebar: !this.state.sidebar
    })
  }

  toggleDayDock = (dayID) => {
    if (this.state.daydock === false){
      this.setState({
        daydock: true,
        spotlight: dayID,
      })
    }
    else{
      this.setState({
        daydock: false,
        spotlight: '',
      })
    }
  }

  openSidebar = () => {
    if (this.state.sidebar === false){
      return null
    }
    else {
      return < Sidebar user={{...this.state.user}} calendars={this.state.calendars} addCalendar={this.addCalendar}/> 
    }
  }

  // openCreateCalendar = (event) => {
  //   if (event.target.class === 'create-calendar'){
  //     this.setState({
  //       createCalendar: true
  //     })
  //   }
  //   else{
  //     this.setState({
  //       createCalendar: false
  //     })
  //   }
  // }

  openDayDock = () => {
    if (this.state.daydock === false){
      return null
    }
    else{
      return < DayDock spotlight={this.state.spotlight} /> 
    }
  }

  addCalendar = (event) => {
    event.preventDefault()
    // fetch(`http://localhost:3000/calendars`, {
    //   method: 'POST',
    //   headers: {

    //   },
    //   body: JSON.stringify({
    //     name: event.target.name.value
    //   })
    // })
    this.setState({
      calendars: [...this.state.calendars, {id: this.state.calendars.length+1, name: event.target.calendarName.value}]
    })

    return null
  }

  render(){
    return (
      <div className="App">
      < Navbar hamburgerBtn={this.hamburgerBtn} menuBtnState={this.state.menuBtn} username={this.state.user.name} />
      {this.openSidebar()}
      {this.openDayDock()}
      < Calendar today={this.state.today} toggleDayDock={this.toggleDayDock}/> 
      </div>
    );
  }
}

//use spotlight state to highlight day being viewed
