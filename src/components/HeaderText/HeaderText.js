import React from 'react'
import './HeaderText.scss'

const HeaderText=(props)=>{
    return(
        <div className='HeaderText animated zoomIn'>
            {props.text}
        </div>
    )
};

export default HeaderText