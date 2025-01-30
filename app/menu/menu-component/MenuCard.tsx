"use client";
import React from "react";
import styles from "../styles/MenuCard.module.scss";
import {Rating} from "@mui/material";
import {useFood} from "@/app/menu/context/FoodContext";

const MenuCard = ({food}: { food: IMenuCard }) => {
    const {setFoodId} = useFood();
    return (
        <div className={styles.card} onClick={() => {
            setFoodId(food.id)
        }}>
            <div className={styles.foodImageDiv}>
                <img className={styles.foodImage} src={food.image} alt={food.name} width={140} height={140}/>
            </div>
            <div className={styles.foodDetailDiv}>
                <h2>{food.name}</h2>
                <Rating style={{direction: "ltr", color: "#8EAE1B"}} name="half-rating-read" defaultValue={food.stars}
                        precision={0.5} readOnly/>
                <div style={{height: 1, width: "100%", background: "#CDCDCD"}}></div>
                <p>{food.size}</p>
                <p className={styles.price}>{food.price.toLocaleString()} تومان</p>
            </div>
        </div>
    );
};

export default MenuCard;
