import React, {Component} from 'react'
import './PageMail.scss'
import MailForm from "../../../components/MailForm/MailForm";

class PageMail extends Component{

    componentDidMount() {
        if (this.props.curTitle!=='написать письмо')
            this.onSetTitle('написать письмо');
    }

    onSetTitle(name){
        this.props.onSetTitle(name);
    }

    render() {
        return (
               <MailForm/>
        )
    }
}

export default PageMail

