'use client';
import React from "react";
import ScheduleTable from "@/app/schedule/components/ScheduleTable";
import styles from './styles/Schedule.module.scss';
import { useScheduleData } from './hooks/queries';

const Page = () => {
    const data = [
            {
                id: 1,
                day: "شنبه",
                date: "01/11/2025",
                food: "زرشک پلو با مرغ",
                lunchPrice: 160000,
                breakfast: "عدسی",
                breakfastPrice: 70000
            },
            {
                id: 2,
                day: "یکشنیه",
                date: "01/12/2025",
                food: "قرمه سبزی",
                lunchPrice: 195000,
                breakfast: "",
                breakfastPrice: 0
            },
            {
                id: 3,
                day: "دوشنبه",
                date: "01/13/2025",
                food: "قیمه",
                lunchPrice: 190000,
                breakfast: "خوراک لوبیا",
                breakfastPrice: 80000
            },
            {
                id: 4,
                day: "سه شنبه",
                date: "01/14/2025",
                food: "کتلت",
                lunchPrice: 170000,
                breakfast: "",
                breakfastPrice: 0
            },
            {
                id: 5,
                day: "چهارشنبه",
                date: "01/15/2025",
                food: "ماکارانی",
                lunchPrice: 140000,
                breakfast: "عدسی",
                breakfastPrice: 70000
            }
        ]

    return (
        <div style={{ margin: '50px 190px' }}>
            <h2 className={styles.shoppingCart}>سبد خرید</h2>
            <ScheduleTable  schedule={data || []} />
            <div className={styles.noteBox}>
                <p className={styles.note}>
                    <span className={styles.attention}> مهم: </span>رزرو فقط تا ساعت 6 عصر روز قبل امکان پذیر می باشد.
                </p>
            </div>
            <div className={styles.registrationBox}>
                <button className={styles.registration}> ثبت سفارش</button>
            </div>
        </div>
    );
};

export default Page;
