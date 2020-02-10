import React from 'react'
import './TextArea.scss'

function isInvalid({valid, touched, shouldValidate}) {
    return !valid && shouldValidate && touched
}

const TextArea=(props)=>{

    const cls = ['feedback-input'];

    if (isInvalid(props)) {
        cls.push('invalid')
    }

    return(
        <p className="TextArea">
            <textarea
                name={props.id} className={cls.join(' ')}
                id={props.id} placeholder={props.placeholder}
                onChange={props.onChange}
            />
        </p>
    )
};

export default TextArea


