import React, {Component} from 'react'
import './PageProjects.scss'
import CardProject from "../../../components/CardProject/CardProject";

class PageProjects extends Component{

    state={
        projects:[
            {id:'1', name:'демо', href_prj:'http://dv-loginov.ru/prj/prj-1/', tags:'html scss js'},
            {id:'2', name:'демо', href_prj:'http://dv-loginov.ru/prj/prj-2/',  tags:'html scss js'},
            {id:'3', name:'демо', href_prj:'http://dv-loginov.ru/prj/prj-3/',  tags:'html scss js bootstrap'},
            {id:'4', name:'демо', href_prj:'http://dv-loginov.ru/prj/prj-4/',  tags:'html scss js'},
        ],
    };

    componentDidMount() {
        if (this.props.curTitle!=='демонстрационные работы')
            this.onSetTitle('демонстрационные работы');
    }

    onSetTitle(name){
        this.props.onSetTitle(name);
    }

    render() {
        return (
            this.state.projects.map(project => {
                return (
                    <CardProject
                        key={project.id}
                        project={project}
                    />
                )
            })
        )
    }
}

export default PageProjects