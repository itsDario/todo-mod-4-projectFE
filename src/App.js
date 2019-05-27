import React from 'react';
import './App.css';
import Navbar from './containers/navbar'
import Sidebar from './containers/sidebar'
import Calendar from './components/calendar'

export default class App extends React.Component {

  state = {
    today: Date(Date.now()),
    menuBtn: false,
    user: {
      name: 'Pidgey',
      calendars: [{id: 1, name: 'Personal Calendar'}, {id: 2, name: 'General Workspace Calendar'}, {id: 3, name: 'Project 1 Calendar'}, {id: 4, name: 'Project 2 Calendar'}, {id: 5, name: 'Pidgey Mating Season'}], //Objects? IDs?
      events: [{id: 1, name: 'Terrorize New Pokemon Trainers'}, {id: 2, name: 'Event 2'}, {id: 3, name: 'Event 3'}, {id: 4, name: 'Event 4'}, {id: 5, name: 'Event 5'}], //Objects? IDs?
    },
    sidebar: false,
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

  openSidebar = () => {
    if (this.state.sidebar === false){
      return null
    }
    else {
      return < Sidebar user={{...this.state.user}} /> 
    }
  }

  render(){
    return (
      <div className="App">
      < Navbar hamburgerBtn={this.hamburgerBtn} menuBtnState={this.state.menuBtn} username={this.state.user.name} />
      {this.openSidebar()}
      < Calendar today={this.state.today} /> 
      </div>
    );
  }
}

