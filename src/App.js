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
    },
    events: [{
      id: 1,
      name: 'Terrorize New Pokemon Trainers',
      date: 5000000,
      desc: 'win every match',
      calender: 1,
      user: 1
    }, {
      id: 2,
      name: 'Event 2',
      date: 50000000,
      desc: 'win every match',
      calender: 1,
      user: 1
    }, {
      id: 3,
      name: 'Event 3',
      date: 500000000,
      desc: 'win every match',
      calender: 1,
      user: 1
    }, {
      id: 4,
      name: 'Event 4',
      date: 500000000,
      desc: 'win every match',
      calender: 1,
      user: 1
    }, {
      id: 5,
      name: 'Event 5',
      date: 5000000000,
      desc: 'win every match',
      calender: 1,
      user: 1
    }],
    calendars: [{
      id: 1,
      name: 'Personal Calendar'
    }, {
      id: 2,
      name: 'General Workspace Calendar'
    }, {
      id: 3,
      name: 'Project 1 Calendar'
    }, {
      id: 4,
      name: 'Project 2 Calendar'
    }, {
      id: 5,
      name: 'Pidgey Mating Season'
    }],
    sidebar: false,
    createCalendar: false,
    daydock: false,
    spotlight: '',
  }

  componentDidMount() {
    this.interval = setInterval(() => { this.setState({ today: Date(Date.now()) }) }, 1000)
  }

  hamburgerBtn = () => {
    this.setState({
      menuBtn: !this.state.menuBtn,
      sidebar: !this.state.sidebar
    })
  }

  addEvent = (event, date) => {

    event.preventDefault()
    console.log(event.target.name.value)
    console.log(event.target.desc.value)
    console.log(date)
    let nevents = [...this.state.events]
    fetch('http://localhost:3000/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        user: 1,
        calender: 1,
        date: `${date}`
        // desc: "#{event.target.desc.value}"
        // name: "#{event.target.name.value}"
      })
    })
      .then(res => res.json())
      .then(res => {
        nevents.push({
          id: res['id'],
          name: event.target.name.value,
          calender: 1,
          user: 1,
          desc: event.target.desc.value
        })
        this.setState({
          events: nevents
        })
      })
  }

  toggleDayDock = (dayID) => {
    if (this.state.daydock === false) {
      this.setState({
        daydock: true,
        spotlight: dayID,
      })
    }
    else {
      this.setState({
        daydock: false,
        spotlight: '',
      })
    }
  }

  openSidebar = () => {
    if (this.state.sidebar === false) {
      return null
    }
    else {

      return < Sidebar user={{ ...this.state.user }} events={this.state.events} calendars={this.state.calendars} addCalendar={this.addCalendar} />
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
    if (this.state.daydock === false) {
      return null
    }
    else {
      return < DayDock spotlight={this.state.spotlight} addEvent={this.addEvent} />
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
      calendars: [...this.state.calendars, { id: this.state.calendars.length + 1, name: event.target.calendarName.value }]
    })

    render(){
      return (
        <div className="App">
          < Navbar hamburgerBtn={this.hamburgerBtn} menuBtnState={this.state.menuBtn} username={this.state.user.name} />
          {this.openSidebar()}
          {this.openDayDock()}
          < Calendar today={this.state.today} toggleDayDock={this.toggleDayDock} />
        </div>
      );
    }
  }

//use spotlight state to highlight day being viewed
