import React from 'react'

const MonthSelector = (props) => {


    console.log(props);

    return <div className='monthselector'>

        <div>
            <button name='January' onClick={e => props.setMonth(e.target.name)}>Jan</button>
            <button name='February' onClick={e => props.setMonth(e.target.name)}>Feb</button>
            <button name='March' onClick={e => props.setMonth(e.target.name)}>Mar</button>
        </div>
        <div>
            <button name='April' onClick={e => props.setMonth(e.target.name)}>Apr</button>
            <button name='May' onClick={e => props.setMonth(e.target.name)}> May</button>
            <button name='June' onClick={e => props.setMonth(e.target.name)}>Jun</button>
        </div>
        <div>
            <button name='July' onClick={e => props.setMonth(e.target.name)}> Jul</button>
            <button name='August' onClick={e => props.setMonth(e.target.name)}> Aug</button>
            <button name='September' onClick={e => props.setMonth(e.target.name)}> Sep</button>
        </div>
        <div>
            <button name='October' onClick={e => props.setMonth(e.target.name)}> Oct</button>
            <button name='November' onClick={e => props.setMonth(e.target.name)}> Nov</button>
            <button name='December' onClick={e => props.setMonth(e.target.name)}> Dec</button>
        </div>
    </div>
}

export default MonthSelector;