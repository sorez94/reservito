"use client"
import React from 'react';
import styles from '../styles/MenuCard.module.scss';
import {Rating} from 'react-simple-star-rating'


const MenuCard = ({food}: { food: IMenuCard }) => {
    return (
        <div className={styles.card}>
            <img className={styles.foodImage} src={food.image} alt={food.name} width={150} height={150}/>
            <h2>{food.name}</h2>
            <Rating
                initialValue={food.stars}
                readonly={true}
                rtl={true}
                style={{ display: 'inline-flex' }}
            />
            <p>{food.price.toLocaleString()} تومان </p>
            <p>{food.size}</p>
        </div>
    );
};

export default MenuCard;
