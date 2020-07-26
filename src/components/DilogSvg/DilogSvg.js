import React from 'react';
import {NavLink} from 'react-router-dom'
import './DilogSvg.scss';

const DilogSvg = (props) => {
    const x=document.documentElement.clientWidth/2-300;
    const y=document.documentElement.clientHeight/2-100;
    return(
        <NavLink
                to='/'
                className='DilogSvg__link'
                title='Home'
        >
            <div className='DilogSvg__shadow'>
            <svg
                viewBox="0 0 150 50"
                transform="rotate(90)"
                className='DilogSvg'
                strokeWidth=".3"
                stroke="orange"
                fill="darkorange"
                style={{left: x+'px', top: y+'px'}}
            >
                <path id='LeftBracket'
                      transform='translate(54.7)'
                      d="M8.6,22.9l16.7-8.6v2.5l-14.1,7.1v0.1L25.3,31v2.5L8.6,24.8V22.9z"/>
                <path id='latterD'
                      opacity='0'
                      d="M30.4,9.5C32.3,9.2,34.6,9,37.1,9c4.5,0,7.7,1,9.8,3c2.2,2,3.4,4.8,3.4,8.7c0,4-1.2,7.2-3.5,9.4c-2.3,2.3-6,3.5-10.7,3.5
                        c-2.2,0-4.1-0.1-5.7-0.3V9.5z M33.6,31c0.8,0.1,1.9,0.2,3.2,0.2c6.7,0,10.3-3.7,10.3-10.3c0-5.7-3.2-9.4-9.8-9.4
                        c-1.6,0-2.8,0.1-3.7,0.3V31z"/>
                <path id='latterI'
                      opacity='0'
                      d="M57.8,11.1c0,1.1-0.8,1.9-2,1.9c-1.1,0-1.9-0.9-1.9-1.9c0-1.1,0.8-2,2-2C57.1,9.1,57.8,10,57.8,11.1z M54.3,33.4V16h3.2
                        v17.4H54.3z"/>
                <path id='latterL'
                      opacity='0'
                      d="M62.8,9.2H66v21.6h10.4v2.6H62.8V9.2z"/>
                <path id='latterO'
                      opacity='0'
                      d="M95,24.6c0,6.4-4.5,9.3-8.7,9.3c-4.7,0-8.4-3.5-8.4-9c0-5.8,3.8-9.3,8.6-9.3C91.6,15.6,95,19.3,95,24.6z M81.2,24.8
                        c0,3.8,2.2,6.7,5.3,6.7c3,0,5.3-2.8,5.3-6.8c0-3-1.5-6.7-5.2-6.7C82.8,18,81.2,21.5,81.2,24.8z"/>
                <path id='latterG'
                      opacity='0'
                      d="M114,16c-0.1,1.3-0.1,2.7-0.1,4.8v10.1c0,4-0.8,6.4-2.5,8c-1.7,1.6-4.1,2.1-6.3,2.1c-2.1,0-4.4-0.5-5.8-1.4l0.8-2.4
                        c1.2,0.7,3,1.4,5.1,1.4c3.2,0,5.6-1.7,5.6-6.1v-1.9h-0.1c-1,1.6-2.8,2.9-5.5,2.9c-4.3,0-7.4-3.7-7.4-8.5c0-5.9,3.9-9.3,7.8-9.3
                        c3,0,4.7,1.6,5.4,3h0.1l0.1-2.6H114z M110.7,22.9c0-0.5,0-1-0.2-1.4c-0.6-1.8-2.1-3.3-4.4-3.3c-3,0-5.2,2.6-5.2,6.6
                        c0,3.4,1.7,6.3,5.1,6.3c1.9,0,3.7-1.2,4.4-3.2c0.2-0.5,0.3-1.2,0.3-1.7V22.9z"/>
                <path id='RightBracket'
                      transform='translate(-54.7)'
                      d="M135.5,24.9l-16.7,8.6V31l14.2-7.1v-0.1l-14.2-7.1v-2.5l16.7,8.6V24.9z"/>
            </svg>
            </div>
        </NavLink>
    )};

export default DilogSvg;