import React, {Component} from 'react';
import is from 'is_js'
import './MailForm.scss'
import Input from './Input/Input';
import TextArea from './TextArea/TextArea'
import Button from './Button/Button';
import axios from 'axios';

class MailForm extends Component {

    initialState = {
        isFormValid: false,
        formControls: {
            email: {
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
    render() {
        const data=this.state.formControls;
        return (
            <form className="MailForm animated zoomIn" id="MailForm" onSubmit={this.submitHandler}>
                <Input
                    value={data.name.value}
                    type={data.name.type}
                    id={data.name.id}
                    placeholder={data.name.placeholder}
                    valid={data.name.valid}
                    touched={data.name.touched}
                    shouldValidate={!!data.name.validation}
                    errorMessage={data.name.errorMessage}
                    onChange={event => this.onChangeHandler(event, 'name')}
                />
                <Input
                    value={data.email.value}
                    type={data.email.type}
                    id={data.email.id}
                    placeholder={data.email.placeholder}
                    valid={data.email.valid}
                    touched={data.email.touched}
                    shouldValidate={!!data.email.validation}
                    errorMessage={data.email.errorMessage}
                    onChange={event => this.onChangeHandler(event, 'email')}
                />
                <TextArea
                    id={data.text.id}
                    placeholder={data.text.placeholder}
                    valid={data.text.valid}
                    touched={data.text.touched}
                    shouldValidate={!!data.text.validation}
                    onChange={event => this.onChangeHandler(event, 'text')}
                />
                <Button />
            </form>
        );
    }
}

export default MailForm;