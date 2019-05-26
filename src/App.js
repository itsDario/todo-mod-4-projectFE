import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './containers/navbar'
import Calendar from './containers/calendar'

export default class App extends React.Component {

  state = {
    menuBtn: false,
    usrName: 'blah',
    year: '',
    month: '',
    day: '',
  }

  hamburgerBtn = () => {
    this.setState({
      menuBtn: !this.state.menuBtn
    })
  }

  render(){
    return (
      <div className="App">
        < Navbar hamburgerBtn={this.hamburgerBtn} menuBtnState={this.state.menuBtn} usrName={this.state.usrName}/>
        < Calendar year={this.state.year} month={this.state.month} day={this.state.day} />
      </div>
    );
  }
}


