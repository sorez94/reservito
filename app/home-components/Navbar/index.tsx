import React from 'react';
import styles from "../../styles/Navbar.module.scss"
import PersonIcon from '@mui/icons-material/Person';
import Image from "next/image";
import Link from "next/link";

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
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <Link className={styles.reservito} href='/'>رزرویتو</Link>
                    <Image style={{marginRight: 4.6}} src="/icons/logoIcon.png" alt='reservito' width={29.74}
                           height={31.68}/>
                </div>
                <p className={styles.onlineReservito}> رزرو آنلاین غذای خانگی </p>
            </div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <Link className={styles.menuItems} href='/menu'> منو غذایی</Link>
                <Link className={styles.menuItems} href='/schedule'>برنامه هفتگی</Link>
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
