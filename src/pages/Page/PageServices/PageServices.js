import React, {Component} from 'react'
import './PageServices.scss'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BoxServicesOrSkills from './../../../components/BoxServicesOrSkills/BoxServicesOrSkills'

class PageServices extends Component{

    state={
      services:{
          title:'выполняемые работы',
          ico:['fas','tools'],
          items:[
              {id: 1, text: 'Валидная, кроссбраузная, адаптивная верстка HTML5, CSS3'},
              {id: 2, text: 'Создание интерактивного функционала страницы (javascript, jQuery)'},
              {id: 3, text: 'PHP скрипты, парсеры'},
              {id: 4, text: 'Интеграция с WordPress'},
          ]},
      skills:{
          title:'стек технологий',
          ico:['fab','stack-overflow'],
          items:[
              {id: 1, text: 'html - pug'},
              {id: 2, text: 'css - scss'},
              {id: 3, text: 'js - jquery - react'},
              {id: 4, text: 'php'},
              {id: 5, text: 'WordPress'},
          ]},
    };

    componentDidMount() {
        if (this.props.curTitle!=='выполняемые работы')
         this.onSetTitle('выполняемые работы')
    }

    onSetTitle(name){
        this.props.onSetTitle(name)
    }

    render() {
        return (
             <React.Fragment>
                <BoxServicesOrSkills
                    title={this.state.services.title}
                    ico={this.state.services.ico}
                    items={this.state.services.items}
                    type={'services'}
                />
                <BoxServicesOrSkills
                    title={this.state.skills.title}
                    ico={this.state.skills.ico}
                    items={this.state.skills.items}
                    type={'skills'}
                />
             </React.Fragment>
        )
    }
}

export default PageServices
