import React from 'react'
import './NavIcoPanel.scss'
import IcoLink from "./IcoLink/IcoLink"

const NavIcoPanel=(props)=>{

    const renderItemMenu=()=>{
        return props.menu.map(item => {
            return (
                <li
                    key={item.id}
                >
                    <IcoLink
                        ico={item.ico}
                        title={item.title}
                        size={props.size}
                        href={item.href}
                        in={item.in}
                    />
                </li>
            )
        })
    };

    return(
        <ul className='NavIcoPanel'>
            {renderItemMenu()}
        </ul>
    )
};

export default NavIcoPanel