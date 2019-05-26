import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './containers/navbar'
import Sidebar from './containers/sidebar'
import Calendar from './components/calendar'

export default class App extends React.Component {

  state = {
    today: Date(Date.now()),
    menuBtn: false,
    usrName: 'User',
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
      return < Sidebar /> 
    }
  }

  render(){
    return (
      <div className="App">
      < Navbar hamburgerBtn={this.hamburgerBtn} menuBtnState={this.state.menuBtn} usrName={this.state.usrName} />
      {this.openSidebar()}
      < Calendar today={this.state.today} /> 
      </div>
    );
  }
}

