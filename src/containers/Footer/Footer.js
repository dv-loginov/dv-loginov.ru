import React from 'react'
import './Footer.scss'


const Footer=(props)=>{
    return(
        <div className='Footer'>
            { props.children }
        </div>
    )
};

export default Footer