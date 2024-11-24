import React from 'react';
import styles from "../../../styles/Navbar.module.scss"
import {Button, IconButton} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';

const Index = () => {
    const handleClick = () => {

    }
    return (
        <div style={{
            padding: '2rem',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%'
        }}>
            <div className={styles.logo}>
                <h1 className={styles.reservito}>رزرویتو</h1>
                <p className={styles.onlineReservito}> رزرو آنلاین غذای خانگی </p>
            </div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <h1 className={styles.menuItems}> منو غذایی</h1>
                <h1 className={styles.menuItems}>برنامه هفتگی</h1>
                <h1 className={styles.menuItems}>مقالات</h1>
                <h1 className={styles.menuItems}>درباره ما</h1>
            </div>
            <div className={styles.signUpIcon}>
                <PersonIcon sx={{
                    fontSize: '24px',
                    width: '24px',
                    margin: '4.8px',
                }}/>
                <p>
                    ورود یا عضویت
                </p>
            </div>
        </div>
    );
};

export default Index;