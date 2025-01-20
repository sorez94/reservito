// app/schedule/ScheduleTable.tsx
"use client";
import React from "react";
import styles from '../styles/ScheduleTable.module.scss'

const ScheduleTable = ({schedule}: { schedule: Array<ISchedule> }) => {
    console.log(schedule)
    return (
        <div className={styles.table}>
            {/* Header */}
            <div className={styles.tableHeader}>
                <div className={styles.tableFirstCell}>روز هفته</div>
                <div className={styles.tableHeaderCell}>تاریخ</div>
                <div className={styles.tableHeaderCell}>غذا</div>
                <div className={styles.tableHeaderCell}>قیمت</div>
                <div className={styles.tableHeaderCell}></div>
                <div className={styles.tableHeaderCell}>صبحانه</div>
                <div className={styles.tableHeaderCell}>قیمت</div>
                <div className={styles.tableHeaderCell}></div>
            </div>

            {/* Rows */}
            {schedule.map((row: ISchedule, index) => (
                <div className={styles.tableRow} key={index}>
                    <div className={styles.tableFirstCell}>{row.day}</div>
                    <div className={styles.tableCell}>{row.date}</div>
                    <div className={styles.tableCell}>{row.food}</div>
                    <div className={styles.tableCell}>{row.lunchPrice.toLocaleString()}</div>
                    <div className={styles.tableCell}>
                        <button className={styles.reserveButton}>رزرو</button>
                    </div>
                    <div className={styles.tableCell}>{row.breakfast}</div>
                    <div className={styles.tableCell}>{row.breakfastPrice.toLocaleString()}</div>
                    <div className={styles.tableCell}>
                        <button className={styles.reserveButton}>رزرو</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ScheduleTable;
