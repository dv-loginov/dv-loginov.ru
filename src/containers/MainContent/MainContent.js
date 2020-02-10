import React from 'react'
import './MainContent.scss'

const MainContent=(props)=>{
    return(
        <div className='MainContent'>
            {props.children}
        </div>
    )
};

export default MainContent