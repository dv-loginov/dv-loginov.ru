import React, {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import './Page.scss'
import Header from "../../containers/Header/Header"
import NavIcoPanel from "../../components/NavIcoPanel/NavIcoPanel"
import HeaderText from "../../components/HeaderText/HeaderText"
import Footer from "../../containers/Footer/Footer"
import Copyright from "../../components/Copyright/Copyright"
import MainContent from "../../containers/MainContent/MainContent"
import PageProjects from "./PageProjects/PageProjects"
import PageServices from "./PageServices/PageServices"
import PageMail from "./PageMail/PageMail"

class Page extends Component {

    constructor(props) {
        super(props);
        this.handlePageTitle = this.handlePageTitle.bind(this);
    }

    state={
        pageTitle:'',
        menu_left:[
            {id:'1', href:'/', title:'react версия', ico:['fas','home'], in: true},
            {id:'2', href:'http://wp.dv-loginov.ru/', title:'wp версия', ico:['fab', 'wordpress'],},
            {id:'3', href:'https://github.com/dv-loginov/', title:'проекты на GitHub', ico:['fab', 'git-square']},
            ],
        menu_right:[
            {id:'4', href:'/services', title:'выполняемые работы', ico:['fas','tools'], in: true},
            {id:'5', href:'/mail', title:'написать письмо', ico:['fas','envelope'], in: true},
            {id:'6', href:'/', title:'панель администратора в разработке', ico:['fas','user-lock']},
        ],
        menu_footer:[
            {id:'7', href:'whatsapp://send?phone=79616023777', title:'WhatsApp', ico:['fab','whatsapp']},
            {id:'8', href:'mailto:dilog@rambler.ru', title:'написать письмо', ico:['fas','envelope']},
            {id:'9', href:'viber://chat?number=+79616023777', title:'Viber', ico:['fab','viber']},
        ],
    };

    handlePageTitle(name){
        this.setState({pageTitle:name})
    };

    render() {
        const WrapPageServices = (props)=> {
            return (<PageServices {...props} onSetTitle={this.handlePageTitle} curTitle={this.state.pageTitle} />);
        };

        const WrapPageMail = (props)=> {
            return (<PageMail {...props} onSetTitle={this.handlePageTitle} curTitle={this.state.pageTitle} />);
        };

        const WrapPageProjects = (props)=> {
            return (<PageProjects {...props} onSetTitle={this.handlePageTitle} curTitle={this.state.pageTitle} />);
        };

        return (
            <div className='MainPage'>
                <Header>
                    <NavIcoPanel menu={this.state.menu_left} size='big'/>
                    <HeaderText
                        text={this.state.pageTitle}
                    />
                    <NavIcoPanel menu={this.state.menu_right} size='big'/>
                </Header>

                <MainContent>
                    <Switch>
                        <Route path="/services" component={WrapPageServices} />
                        <Route path="/mail" component={WrapPageMail} />
                        <Route path="/" exact component={WrapPageProjects} />
                        <Redirect to="/" component={WrapPageProjects}/>
                    </Switch>
                </MainContent>

                <Footer>
                    <Copyright/>
                    <NavIcoPanel menu={this.state.menu_footer} size='small'/>
                </Footer>

            </div>
        );
    }
}

export default Page;