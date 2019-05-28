import React from 'react';
import './App.css';
import Navbar from './containers/navbar'
import Sidebar from './containers/sidebar'
import Calendar from './components/calendar'
import DayDock from './components/daydock'

export default class App extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
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
      calendars: [],
      sidebar: false,
      createCalendar: false,
      daydock: false,
      spotlight: '',
    }

    fetch('http://localhost:3000/events')
      .then(res => res.json())
      .then(resj => this.setState({
        events: resj
      }))

    fetch('http://localhost:3000/calenders')
      .then(res => res.json())
      .then(resj => this.setState({
        calendars: resj
      }))

  }


  componentDidMount() {
    this.interval = setInterval(() => { this.setState({ today: Date(Date.now()) }) }, 1000)

    fetch('http://localhost:3000/calenders')
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          calendars: json
        })
      })
  }

  hamburgerBtn = () => {
    this.setState({
      menuBtn: !this.state.menuBtn,
      sidebar: !this.state.sidebar
    })
  }

  addEvent = (event) => {
    event.persist()
    event.preventDefault()
    // console.log(event.target.name.value)
    // console.log(event.target.desc.value)
    // console.log(date)

    let nevents = [...this.state.events]
    fetch('http://localhost:3000/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: 1,
        calender: 1,
        date: this.state.spotlight.getTime(),
        description: event.target.desc.value,
        name: event.target.name.value,
      })
    })
      .then(res => res.json())
      .then(res => {
        nevents.push({
          id: res['id'],
          name: event.target.name.value,
          calender: 1,
          user: 1,
          description: event.target.desc.value
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
        spotlight: new Date(dayID),
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

  openDayDock = () => {
    if (this.state.daydock === false) {
      return null
    }
    else {
      return < DayDock spotlight={this.state.spotlight} addEvent={this.addEvent} calendars={this.state.calendars} events={this.state.events.filter(event => event.date === this.state.spotlight)} />
    }
  }

  addCalendar = (event) => {
    event.preventDefault()

    fetch(`http://localhost:3000/calenders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        name: event.target.name.value
      })
    })
      .then(res => res.json())
      .then(console.log)
    this.setState({
      calendars: [...this.state.calendars, { id: this.state.calendars.length + 1, name: event.target.name.value }]
    })
  }

  render() {
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