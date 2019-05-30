import React from 'react'

const YearSelector = (props) => {
    
    const createYearSelector = (year) => {
        let yearArr = []
        for (let n=year-6; n < year+6; n++){
            yearArr.push(n)
        }

        return yearArr.map((year)=>{
            return <button className='yearButton' name={year} onClick={e => props.setYear(e.target.name)}>{year}</button>
        })
    }

    return <div className='yearselector'>
        {createYearSelector(props.year)}
    </div>
}

export default YearSelector;