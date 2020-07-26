import React from 'react'
import './CardProject.scss'

const CardProject=(props)=>{
    return(
        <div className = "card-wrap" >
            < div className = "card" >
                < div className = "card__content" >
                    < div  className = "card__front"  style = {{backgroundImage:`url(${props.project.href_prj+'prj-cover.png'})`}} />
                    <div className="card__back">
                        <h3 className="card__title">{props.project.name}</h3>
                        <p className="card__subtitle">{props.project.tags}</p>
                        <p className="card__body"><a href={props.project.href_prj}>Перейти</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CardProject;


