"use client";
import React from "react";
import styles from '../styles/ScheduleTable.module.scss';
import { ISchedule } from "@/app/schedule/interface/ISchedule";

const ScheduleTable = ({ schedule, queryParams }: { schedule: Array<ISchedule>, queryParams: { isLoading: boolean, isError: boolean, error: any } }) => {
    const { isLoading, isError } = queryParams;

    const renderRow = (row: ISchedule | null, index: number) => (
        <div className={styles.tableRow} key={index}>
            <div className={styles.tableFirstCell}>{row?.day || "—"}</div>
            <div className={styles.tableCell}>{row?.date || "—"}</div>
            <div className={styles.tableCell}>{row?.food || "—"}</div>
            <div className={styles.tableCell}>{row?.lunchPrice?.toLocaleString() || "—"}</div>
            <div className={styles.tableCell}>
                <button
                    className={`${styles.reserveButton} ${!row ? styles.disabledButton : ""}`}
                    disabled={!row}
                >
                    رزرو
                </button>
            </div>
            <div className={styles.tableCell}>{row?.breakfast || "—"}</div>
            <div className={styles.tableCell}>{row?.breakfastPrice?.toLocaleString() || "—"}</div>
            <div className={styles.tableCell}>
                <button
                    className={`${styles.reserveButton} ${!row ? styles.disabledButton : ""}`}
                    disabled={!row}
                >
                    رزرو
                </button>
            </div>
        </div>
    );

    return (
        <div className={styles.table}>
            {/* Table Header */}
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

            {/* Table Rows */}
            {isLoading ? (
                // Show loading placeholders
                Array(5).fill(null).map((_, index) => (
                    <div className={styles.tableRow} key={index}>
                        <div className={styles.tableFirstCell}>
                            <div className={styles.loadingPlaceholder}></div>
                        </div>
                        <div className={styles.tableCell}>
                            <div className={styles.loadingPlaceholder}></div>
                        </div>
                        <div className={styles.tableCell}>
                            <div className={styles.loadingPlaceholder}></div>
                        </div>
                        <div className={styles.tableCell}>
                            <div className={styles.loadingPlaceholder}></div>
                        </div>
                        <div className={styles.tableCell}>
                            <div className={styles.loadingPlaceholder}></div>
                        </div>
                        <div className={styles.tableCell}>
                            <div className={styles.loadingPlaceholder}></div>
                        </div>
                        <div className={styles.tableCell}>
                            <div className={styles.loadingPlaceholder}></div>
                        </div>
                        <div className={styles.tableCell}>
                            <div className={styles.loadingPlaceholder}></div>
                        </div>
                    </div>
                ))
            ) : isError ? (
                // Show table with null values
                Array(5).fill(null).map((_, index) => renderRow(null, index))
            ) : (
                // Show actual rows
                schedule.map((row: ISchedule, index) => renderRow(row, index))
            )}
        </div>
    );
};

export default ScheduleTable;
