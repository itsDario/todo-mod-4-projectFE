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
  }
  
    hamburgerBtn = () => {
      this.setState({
        menuBtn: !this.state.menuBtn
      })
    }

  render(){
    return (
      <div className="App">
      < Navbar hamburgerBtn={this.hamburgerBtn} menuBtnState={this.state.menuBtn} usrName={this.state.usrName} />
      < Sidebar />
      < Calendar today={this.state.today} /> 
      </div>
    );
  }
}

