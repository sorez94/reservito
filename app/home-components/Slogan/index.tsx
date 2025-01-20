"use client"
import React from 'react';
import styles from "../../styles/Slogan.module.scss"
import FeatureComponent from "@/app/home-components/Slogan/FeatureComponent";

const Index = () => {
    return (
        <div className={styles.sloganSec}>
            <h1>چرا رزرویتو</h1>
            <div className={styles.features}>
                <FeatureComponent icon={'/icons/healthy.png'} description={'غذاهای رزرویتو با بهترین و تازه ترین مواد اولیه و البته با طبخ سالم خانگی تهیه شده است!'} title={'سالم'} />
                <FeatureComponent icon={'/icons/easy-send.png'} description={'لازم نیست نگران ارسال به موقع غذات باشی! رزرویتو حواسش به همه چی هست!'} title={'ارسال آسان'}/>
                <FeatureComponent icon={'/icons/economy.png'} description={'میتونی با قیمت مناسب تهیه کنی!'} title={'مقرون به صرفه'}/>
                <FeatureComponent icon={'/icons/delicious.png'} description={'با وجود همه ی این نکات مثبت غذاهای رزرویتو خوشمزه است!'} title={'خوشمزه'}/>
            </div>
        </div>
    );
};

export default Index;