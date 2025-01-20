"use client"
import React from 'react';
import styles from "../../styles/Footer.module.scss"
import Image from "next/image";

const   Index = () => {

    return (
        <div className={styles.footer}>
            <div className={styles.footerSection}>
                <div className={styles.logo}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <h1 className={styles.reservito}>رزرویتو</h1>
                        <Image style={{marginRight: 4.6}} src="/icons/logoIcon.png" alt='reservito' width={29.74}
                               height={31.68}/>
                    </div>
                    <p className={styles.onlineReservito}> رزرو آنلاین غذای خانگی </p>
                </div>
                <div style={{width: 260}}>
                    <p style={{fontSize: 16, color: "white"}}>رزرویتو یه پلتفرم برای سفارش آنلاین غذای خانگی، که دیگه
                        نگران وعده های غذاییت و سلامتشون نباشی :)</p>
                </div>
                <div>
                    <div style={{marginBottom: 34}} className={styles.menuItems}>
                        <p>منو غذایی</p>
                        <p>مقالات</p>
                    </div>
                    <div style={{marginTop: 34}} className={styles.menuItems}>
                        <p>برنامه هفتگی</p>
                        <p>درباره ما</p>
                    </div>
                </div>
                <div>
                    <div style={{marginBottom: 34}} className={styles.socialMedia}>
                        <Image src={'/icons/user.png'} alt={'user'} width={13} height={14}
                               style={{height: 14, marginLeft: 5}}/>
                        <p>ورود یا عضویت</p>
                    </div>
                    <div style={{marginTop: 34}} className={styles.socialMedia}>
                        <Image src={'/icons/social-media.png'} alt={'social-media'} width={91} height={22}
                               style={{height: 22}}/>
                    </div>
                </div>
            </div>
            <div className={styles.design}>
                <p style={{color: "#ABABAB"}}>طراحی و پیاده سازی توسط</p>
                <div onClick={()=> window.open("https://sorez.org", "_blank")} className={styles.sorez}>
                    <span style={{color: 'white'}}> Rez</span><span style={{color: "#457EAB"}}>So</span>
                </div>
            </div>
        </div>

    );
};

export default Index;