import React from "react";
import {Card} from "antd";
import s from "./Cards.module.css"
import { TagsType } from "../types/typesLeads";

type CardType = {
    name: string
    status: { name: string, color: string }
    responsibleUser: string
    created_at: number
    price: number
    tags: Array<TagsType>
}

export const Cards = (props: CardType) => {
    
    const createDate = new Date(props.created_at * 1000)

    return (

        <div className={s.cardsContainer}>
            <Card
                title={props.name}
                style={{width: 300}}>
                <div  >{props.tags.map(el => <span key={el.id} style={{ marginLeft: "5px", backgroundColor: "gray"}}>{el.name}</span> )}</div>
                <p style={{backgroundColor: `${props.status.color}`}}> {props.status.name} </p>
                <p>{props.responsibleUser}</p>
                <p>{`${createDate.getDay()}.${createDate.getMonth()}.${createDate.getFullYear()}`}</p>
                <p>{props.price}</p>
            </Card>

        </div>
    )
}