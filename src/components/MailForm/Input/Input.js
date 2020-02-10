import React from 'react'
import './Input.scss'

function isInvalid({valid, touched, shouldValidate}) {
    return !valid && shouldValidate && touched
}

const Input=props=>{

    const cls = ['feedback-input'];

    if (isInvalid(props)) {
        cls.push('invalid')
    }

    return(
        <p className={props.id}>
        <input name={props.id} type={props.type}
               className={cls.join(' ')}
               placeholder={props.placeholder}
               id={props.id}
               onChange={props.onChange}
               autoComplete={'off'}
            />
        </p>
    )
};

export default Input