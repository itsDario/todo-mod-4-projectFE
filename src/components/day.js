import React, { Fragment } from 'react'

export default class Day extends React.Component{

    state = {
        focus: false,
    }

    toggleFocus = () => {
        this.setState({
            focus: !this.state.focus
        })
    }

    selectDay = () => {
        // if (this.props.day.focus){
        //     return <span className='focus' id={this.props.day.id} >
        //         {this.props.day.num}
        //     </span>
        // }
        // else{
            if (!this.state.focus){
                return <span className='day' id={this.props.day.id} onClick={this.toggleFocus}>
                    {this.props.day.num}
                </span>
            }
            else {
                return <span className='focus' id={this.props.day.id} onClick={this.toggleFocus}>
                {this.props.day.num}
            </span>
            }
        }
    // }

    render(){
        return <Fragment>
            {this.selectDay()}
        </Fragment>
    }
}
