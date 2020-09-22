import React from 'react'
import './Button.scss'

const Button=props=>{

    const disabled=!props.valid;
    const cls = ['Button'];
    if (!props.valid) cls.push('noActive');

    return(
        <button  className={cls.join(' ')}
                disabled={disabled}
                >ОТПРАВИТЬ
        </button>
    )
};

export default Button


