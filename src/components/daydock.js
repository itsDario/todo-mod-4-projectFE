import React, { Fragment } from 'react'

export default class DayDock extends React.Component{

    state = {
        form: false,
        date: new Date(this.props.spotlight),
        events: [],
    }

    // componentDidMount(){
    //     fetch(`http://localhost:3000/events/${this.props.spotlight}`)
    //     .then(resp=>resp.json())
    //     .then(json=>{
    //         this.setState({
    //             events: json
    //         })
    //     })
    // }

    handleClick = () => {
        this.setState({
            form: !this.state.form
        })
    }

    handleSubmit = () => {

    }
    
    showDock = () => {
        if (!this.state.form){
            return <Fragment>
                <h2>{this.state.date.toDateString()}</h2>
                <h2> Events </h2>
                <ul className='events-list'>
                    <li>Event 1</li>
                    <li>Event 2</li>
                    <li>Event 3</li>
                    <li>Event 4</li>
                </ul>
                <button className='create-event' onClick={this.handleClick}>Create Event</button>
            </Fragment>
        }
        else if (this.state.form){
            return <Fragment>
                <h2>Create New Event</h2> 
                <form className='events-form' onSubmit={this.handleSubmit}>
                    <label>Name</label><br/>
                    <input type='text' placeholder='Enter event name here...' /><br/><br/>
                    <label>Description</label><br/>
                    <textarea placeholder='(Optional) Enter event description here...'/><br/><br/>
                    <input type='submit' value='submit'/>
                </form>
            </Fragment>
        }
    }

    render(){
        return <div className='daydock'>
            {this.showDock()}
        </div>
    }
}