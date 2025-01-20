import React from "react";
import ScheduleTable from "@/app/schedule/components/ScheduleTable";
import {Typography} from "@mui/material";
import styles from './styles/Schedule.module.scss'

interface Schedule {
    id: string;
    day: string;
    date: string;
    food: string;
    lunchPrice: number;
    breakfast: string;
    breakfastPrice: number;
}

export const revalidate = 3600; // Revalidate every hour

const Page = async () => {
    const data = await fetch("http://localhost:3001/schedule");
    const schedule: Schedule[] = await data.json();

    return (
        <div style={{margin: '50px 190px'}}>
            <h2 className={styles.shoppingCart}>سبد خرید</h2>
            <ScheduleTable schedule={schedule} />
            <div className={styles.noteBox}>
                <p className={styles.note}><span className={styles.attention}> مهم: </span>رزرو فقط تا ساعت 6 عصر روز قبل امکان پذیر می باشد.</p>
            </div>
            <div className={styles.registrationBox}>
                <button className={styles.registration}> ثبت سفارش </button>
            </div>
        </div>
    );
};

export default Page;
