import React, {useState} from "react";
import {Card} from "antd";
import s from "./Cards.module.css"
import moment from "moment";

type CardType = {
    name: string
    status: { name: string, color: string }
    responsibleUser: string
    created_at: number
    price: number
}

export const Cards = (props: CardType) => {
    
    const createDate = moment(props.created_at).locale("ru").format('D.MM.YYYY');

    return (

        <div className={s.cardsContainer}>
            <Card
                title={props.name}
                style={{width: 300}}>
                <div>+</div>
                <p style={{backgroundColor: `${props.status.color}`}}> {props.status.name}</p>
                <p>{props.responsibleUser}</p>
                <p>{createDate}</p>
                <p>{props.price}</p>
            </Card>

        </div>
    )
}