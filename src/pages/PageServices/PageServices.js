import React, { useState } from 'react'
import './PageServices.scss'
import CardWork from "../../components/CardWork/CardWork";
import CardWorkDescription from "../../components/CardWorkDescription/CardWorkDescription";
import jsonData from './pageServices.json';

const PageServices=()=>{

    const [description, setDescription] = useState(null);

    const listServices=jsonData;

    function selectWorkHandler(id){
        const {description}=listServices[id-1].work;
        setDescription(description);
    }

    function closeDiscriptionHandler(){
        setDescription(null);
    }

    return (
        description
            ?<CardWorkDescription
                title={description.title}
                subtitle={description.subtitle}
                works={description.works}
                close={closeDiscriptionHandler}
                />
            :listServices.map(item=>{
                const {id, work:{service}}=item;
                return(
                    <CardWork
                        key={id}
                        id={id}
                        ico={service.ico}
                        title={service.title}
                        subtitle={service.subtitle}
                        price={service.price}
                        onClick={selectWorkHandler}
                    />
                )
            })
    )
};

export default PageServices
