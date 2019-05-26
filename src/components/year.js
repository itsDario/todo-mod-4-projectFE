import React from 'react'

export default class Year extends React.Component{

    state = {
        year: this.props.today.split(' ')[3]
    }

    render(){
        return <div className='year'>
            {this.state.year}
        </div>
    }
}