import React, { useState } from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import './Page.scss'
import Header from "../../containers/Header/Header"
import NavIcoPanel from "../../components/NavIcoPanel/NavIcoPanel"
import HeaderText from "../../components/HeaderText/HeaderText"
import Footer from "../../containers/Footer/Footer"
import Copyright from "../../components/Copyright/Copyright"
import MainContent from "../../containers/MainContent/MainContent"
import PageProjects from "../../pages/PageProjects/PageProjects"
import PageServices from "../../pages/PageServices/PageServices"
import PageMail from "../../pages/PageMail/PageMail"
import DilogSvg from "../../components/DilogSvg/DilogSvg";

const Page=()=>{

    const [title, setTitle] = useState('');

    const menu_right=[
                        {id:'5', href:'/mail', title:'написать письмо', ico:['fas','envelope'], in: true},
                        {id:'4', href:'/services', title:'выполняемые работы', ico:['fas','tools'], in: true},
                        {id:'3', href:'https://github.com/dv-loginov/', title:'проекты на GitHub', ico:['fab', 'git-square']},
            ];

    const menu_footer=[
                        {id:'7', href:'whatsapp://send?phone=79616023777', title:'WhatsApp', ico:['fab','whatsapp']},
                        {id:'8', href:'mailto:dilog@rambler.ru', title:'написать письмо', ico:['fas','envelope']},
                        {id:'9', href:'viber://chat?number=+79616023777', title:'Viber', ico:['fab','viber']},
            ];

    const WrapPageServices = ()=> {
             setTitle('выполняемые работы');
             return (<PageServices/>);
    };

    const WrapPageMail = ()=> {
            setTitle('контакты');
            return (<PageMail />);
        };

        const WrapPageProjects = ()=> {
            setTitle('демонстрационные работы\n');
            return (<PageProjects />);
        };

        return (
            <div className='MainPage'>
                <Header>
                    <DilogSvg/>
                    <HeaderText
                        text={title}
                    />
                    <NavIcoPanel menu={menu_right} size='big'/>
                </Header>

                <MainContent>
                    <Switch>
                        <Route path="/services" component={WrapPageServices} />
                        <Route path="/mail" component={WrapPageMail} />
                        <Route path="/" exact component={WrapPageProjects} />
                        <Redirect to="/" component={PageProjects}/> {/*404*/}
                    </Switch>
                </MainContent>

                <Footer>
                    <Copyright/>
                    <NavIcoPanel menu={menu_footer} size='small'/>
                </Footer>

            </div>
        );
    };

export default Page;