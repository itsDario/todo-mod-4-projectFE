import React from 'react'

const MonthSelector = (props) => {

    const monthsArr = ['January',' February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const monthsShortArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    const createMonthSelector = () => {
        return monthsArr.map((month, index)=>{
            return <button className='monthButton' name={month} onClick={e => props.setMonth(e.target.name)}>{monthsShortArr[index]}</button>
        })
    }
    
    return <div className='monthselector'>
        {createMonthSelector()}
    </div>
}

export default MonthSelector;

        {/* <div>
            <button className='monthButton' name='January' onClick={e => props.setMonth(e.target.name)}>Jan</button>
            <button className='monthButton' name='February' onClick={e => props.setMonth(e.target.name)}>Feb</button>
            <button className='monthButton' name='March' onClick={e => props.setMonth(e.target.name)}>Mar</button>
        </div>
        <div>
            <button className='monthButton' name='April' onClick={e => props.setMonth(e.target.name)}>Apr</button>
            <button className='monthButton' name='May' onClick={e => props.setMonth(e.target.name)}> May</button>
            <button className='monthButton' name='June' onClick={e => props.setMonth(e.target.name)}>Jun</button>
        </div>
        <div>
            <button className='monthButton' name='July' onClick={e => props.setMonth(e.target.name)}> Jul</button>
            <button className='monthButton' name='August' onClick={e => props.setMonth(e.target.name)}> Aug</button>
            <button className='monthButton' name='September' onClick={e => props.setMonth(e.target.name)}> Sep</button>
        </div>
        <div>
            <button className='monthButton' name='October' onClick={e => props.setMonth(e.target.name)}> Oct</button>
            <button className='monthButton' name='November' onClick={e => props.setMonth(e.target.name)}> Nov</button>
            <button className='monthButton' name='December' onClick={e => props.setMonth(e.target.name)}> Dec</button>
        </div> */}