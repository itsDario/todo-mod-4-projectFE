import React from 'react';
import '../hamburgers.css';
import '../navbar.css';
import { userInfo } from 'os';

const Navbar = (props) => {

    const clickBtn = () => {

        if (props.menuBtnState === false){
            return (
                <button className="hamburger hamburger--vortex" onClick={props.hamburgerBtn} type="button">
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>)
        }
        else{
            return (
                <button className="hamburger hamburger--vortex is-active" onClick={props.hamburgerBtn} type="button">
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>  
                    </span>
                </button>)
        }
    }

    const userDash = () => {

        return <span className='UserDash'>
            <button className='messages' onClick={()=>{alert('Goes to Messages')}}>Messages</button>
            <button onClick={()=>{alert('Opens User Drawdown')}}>Welcome {props.usrName}!</button>
        </span>
    }

    return (<div className='Navbar'>
            {clickBtn()}
            {userDash()}
        </div>)
}

export default Navbar