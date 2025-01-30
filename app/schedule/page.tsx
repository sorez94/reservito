'use client';
import React from "react";
import ScheduleTable from "@/app/schedule/components/ScheduleTable";
import styles from './styles/Schedule.module.scss';
import { useScheduleData } from './hooks/queries';

const Page = () => {
    const { data, isLoading, isError, error, refetch } = useScheduleData();

    return (
        <div style={{ margin: '50px 190px' }}>
            <h2 className={styles.shoppingCart}>سبد خرید</h2>
            {isError &&
                <div className={styles.noteBox}>
                    <p className={styles.notFoundText}>
                        خطای {error.status} | در هنگام دریافت اطلاعات، خطا رخ داده است
                        <button className={styles.refetchBtn} onClick={refetch}> بارگیری مجدد </button>
                    </p>
                </div>
            }
            <ScheduleTable queryParams={{isLoading, isError, error}} schedule={data?.data || []} />
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
