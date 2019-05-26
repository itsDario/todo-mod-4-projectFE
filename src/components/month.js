import React from 'react'
import Day from './day'

export default class Month extends React.Component{

    createDays = () => {
        return <div></div>
    }

    render(){
        return <div>
            {this.createDays()}
        </div>
    }
}