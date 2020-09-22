import React from 'react';
import {ReactComponent as Notebook} from './notebook.svg';
import {ReactComponent as Wordpress} from './wordpress.svg';
import {ReactComponent as Mobile} from './mobile.svg';
import './CardWork.scss';

const CardWork = (props) => {

    function onClickHandler() {
        props.onClick(props.id);
    }

    const componentsIco={
        notebook: Notebook,
        wordpress: Wordpress,
        mobile:Mobile,
    };

    function icoNameToComponent(ico){
        const Icon=componentsIco[ico];
         return <Icon />;
    }

    return (
        <div className='CardWork' onClick={onClickHandler}>
            <div className='CardWork__ico'>{icoNameToComponent(props.ico)}</div>
            <div className='CardWork__title'>{props.title}</div>
            <div className='CardWork__subtitle'>{props.subtitle}</div>
            <div className='CardWork__price'>от {props.price} ₽</div>
        </div>
    )
};

export default CardWork;