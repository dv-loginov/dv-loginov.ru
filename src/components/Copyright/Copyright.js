import React from 'react'
import './Copyright.scss'

let date=new Date();

const Copyright=()=>{
    return(
        <div className='Copyright'>
            &copy; Логинов Дмитрий 2018 - {date.getFullYear()}
        </div>
    );
};

export default Copyright