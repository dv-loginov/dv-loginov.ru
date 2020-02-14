import React, {Component} from 'react';
import is from 'is_js'
import './MailForm.scss'
import Input from './Input/Input';
//import TextArea from './TextArea/TextArea'
import Button from './Button/Button';
import axios from 'axios';

class MailForm extends Component {

    initialState = {
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

    state = this.initialState;

    handleFormReset = () => {
        console.log(this.state);
        this.setState(()=>this.initialState);
        console.log(this.state);
        document.querySelector('#MailForm').reset();
    };

    async sendMail(){
         const dataForm={
             name: this.state.formControls.name.value,
             email: this.state.formControls.email.value,
             message: this.state.formControls.text.value,
         };

        try{
            const response = await axios.post('http://dv-loginov.ru/util/send-mail.php', dataForm);
            return response.data;
        }
        catch(e){
            console.log(e)
        }
    }

    submitHandler = event => {
        event.preventDefault();
        if (this.state.isFormValid){
            this.sendMail()
                .then((r) => this.handleFormReset());
        }
    };

    validateControl(value, validation) {
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

    onChangeHandler = (event, controlName) => {
        const formControls = { ...this.state.formControls };
        const control = { ...formControls[controlName] };

        control.value = event.target.value;
        control.touched = true;

        control.valid = this.validateControl(control.value, control.validation);

        formControls[controlName] = control;

        let isFormValid = true;

        Object.keys(formControls).forEach(name => {
             isFormValid = formControls[name].valid && isFormValid
        });

        this.setState({
             formControls, isFormValid
        });
    };

    renderInputs() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName];
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
                    onChange={event => this.onChangeHandler(event, controlName)}
                />
            )
        })
    }

    render() {
        return (
            <form className="MailForm animated zoomIn" id="MailForm" onSubmit={this.submitHandler}>
                {this.renderInputs()}
                <Button />
            </form>
        );
    }
}

export default MailForm;