import React from 'react';
import './IcoLink.scss';
import {NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IcoLink=(props)=>{

    const cls = ['IcoLink', 'IcoLink-'+props.size];

    const inLink=()=> {
        return(
            <NavLink
                to={props.href}
                className={cls.join(' ')}

            >
                <FontAwesomeIcon
                    icon={props.ico}
                    title={props.title}
                />
            </NavLink>
        )};

    const outLink=()=>{
        return(
            <a className={cls.join(' ')} href={props.href} title={props.title} target="_blank" rel='noreferrer noopener'>
                <FontAwesomeIcon icon={props.ico}/>
            </a>
        )};

    return(
        props.in
            ?inLink()
            :outLink()
    )
};

export default IcoLink;