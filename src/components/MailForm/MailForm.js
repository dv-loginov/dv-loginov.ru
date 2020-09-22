import React, { useState } from 'react';
import Button from "./Button/Button";
import './MailForm.scss'
import Input from "./Input/Input";
import is from "is_js";
import axios from "axios";

const MailForm = (props) => {

    const initialState = {
        isFormValid: false,
        formControls: {
            email: {
                tag:'input',
                value: '',
                type: 'text',
                id:'email',
                placeholder: 'Email',
                errorMessage: 'Введите корректный email',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true,
                },
            },
            name: {
                tag:'input',
                value: '',
                type: 'text',
                placeholder: 'Name',
                id:'name',
                errorMessage: 'Введите имя',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6,
                },
            },
            text: {
                tag:'textarea',
                value: '',
                id:'comment',
                placeholder: 'Comment',
                errorMessage: 'Введите сообщение',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6,
                    maxLength: 150,
                },
            },
        }

    };
    const [formState, setFormState] = useState(initialState);

    function validateControl(value, validation) {

        if (!validation) {
            return true
        }

        let isValid = true;

        if (validation.required) {
            isValid = value.trim() !== '' && isValid
        }

        if (validation.email) {
            isValid = is.email(value) && isValid
        }

        if (validation.minLength) {
            isValid = value.length >= validation.minLength && isValid
        }

        if (validation.maxLength) {
            isValid = value.length <= validation.maxLength && isValid
        }

        return isValid
    }

    function onChangeHandler(event, controlName){

        const formControls = { ...formState.formControls };
        const control = { ...formControls[controlName] };

        control.value = event.target.value;
        control.touched = true;
        control.valid = validateControl(control.value, control.validation);

        formControls[controlName] = control;

        let isFormValid = true;

        Object.keys(formControls).forEach(name => {
            isFormValid = formControls[name].valid && isFormValid
        });

        setFormState({
             isFormValid, formControls
        });
    }

    async function sendMail(){
        const dataForm={
            name: formState.formControls.name.value,
            email: formState.formControls.email.value,
            message: formState.formControls.text.value,
        };

        try{
            const response = await axios.post('http://dv-loginov.ru/util/send-mail.php', dataForm);
            console.log(response.data);
            return response.data;
        }
        catch(e){
            console.log(e)
        }
    }

    function handleFormReset(){
        setFormState(initialState);
    }

    function submitHandler( event ){
        event.preventDefault();
        if (formState.isFormValid){
            sendMail().then(() => handleFormReset());
        }
    }

    function renderInputs(){
        return Object.keys(formState.formControls).map((controlName, index) => {
            const control = formState.formControls[controlName];
            return (
                <Input
                    key={controlName + index}
                    id={control.id}
                    tag={control.tag}
                    type={control.type}
                    value={control.value}
                    valid={control.valid}
                    touched={control.touched}
                    placeholder={control.placeholder}
                    shouldValidate={!!control.validation}
                    errorMessage={control.errorMessage}
                    onChange={event => onChangeHandler(event, controlName)}
                />
            )
        })
    }

    return (
        <form className="MailForm" id="MailForm" onSubmit={submitHandler}>
            {renderInputs()}
            <Button valid={formState.isFormValid}/>
        </form>
    )
};

export default MailForm;