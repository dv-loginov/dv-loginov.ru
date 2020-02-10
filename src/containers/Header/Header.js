import React from 'react'
import './Header.scss'


const Header=(props)=>{
    return(
        <div className='Header'>
            { props.children }
        </div>
    )
};

export default Header