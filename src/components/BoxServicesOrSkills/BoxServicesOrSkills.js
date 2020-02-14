import React from 'react'
import './BoxServicesOrSkills.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BoxServicesOrSkills=(props)=>{

    const cls = ['BoxServicesOrSkills animated zoomIn', 'BoxServicesOrSkills-'+props.type];

    const renderItems=()=>{
         return props.items.map(item => {
             return (
                 <li
                    key={item.id}
                 >
                    {item.text}
                 </li>
             )
         })
    };

    return(
        <div className={cls.join(' ')}>
            <ul>
                <li><FontAwesomeIcon icon={props.ico} style={{marginRight: '.5em'}}/>{props.title}</li>
                {renderItems()}
            </ul>
        </div>
    )
};

export default BoxServicesOrSkills