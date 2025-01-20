"use client"
import React, {useState} from 'react';
import styles from "../../styles/FastFoodDisadvantages.module.scss"
import Image from "next/image";
import WestIcon from "@mui/icons-material/West";

const Index = () => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className={styles.section}>
            <div className={styles.imageSection}>

            </div>
            <div className={styles.textSection}>
                <div style={{margin: '36px 0 60px 0'}}>
                    <h1>مضرات مصرف مداوم غذای بیرون<span> و به ویژه فست فودها </span></h1>
                </div>
                <div>
                    <ul>
                        <li>
                            <Image src={'/icons/bullet.png'} alt={'bullet'} width={16}
                                   style={{height: 16, marginLeft: 9}} height={16}/>
                            بالا بودن میزان
                            <span> نمک </span>
                            و
                            <span> کلسترول </span>
                            و
                            <span> قند </span>
                        </li>
                        <li>
                            <Image src={'/icons/bullet.png'} alt={'bullet'} width={16}
                                   style={{height: 16, marginLeft: 9}} height={16}/>
                            حاوی
                            <span> مواد نگهدارنده </span>
                            ،
                            <span> مواد افزودنی </span>
                            و
                            <span> رنگ </span>
                        </li>
                        <li>
                            <Image src={'/icons/bullet.png'} alt={'bullet'} width={16}
                                   style={{height: 16, marginLeft: 9}} height={16}/>
                            دارای
                            <span> فتالات </span>
                            هستند. (فتالات تاثیرات منفی بر روی هورمون‌ها افراد می‌گذارد).
                        </li>
                        <li>
                            <Image src={'/icons/bullet.png'} alt={'bullet'} width={16}
                                   style={{height: 16, marginLeft: 9}} height={16}/>
                            کیفیت پایین مواد اولیه
                        </li>
                        <li>
                            <Image src={'/icons/bullet.png'} alt={'bullet'} width={16}
                                   style={{height: 16, marginLeft: 9}} height={16}/>
                            ایجاد اختلال در عملکردهای شناختی
                        </li>
                        <li>
                            <Image src={'/icons/bullet.png'} alt={'bullet'} width={16}
                                   style={{height: 16, marginLeft: 9}} height={16}/>
                            مشکلات پوستی مختلف مانند جوش و آکنه
                        </li>
                        <li>
                            <Image src={'/icons/bullet.png'} alt={'bullet'} width={16}
                                   style={{height: 16, marginLeft: 9}} height={16}/>
                            احتمال طبخ غذا در شرایط غیربهداشتی و استفاده از روغن های چندین باره داغ شده
                        </li>
                    </ul>
                    <div className={styles.moreSection}>
                        <p>برای مطالعه بیشتر:</p>
                        <div className={styles.moreIcon}>
                            <p>
                                مقالات
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.healthy}>
                <div className={styles.healthyTxt} style={{}}>
                    <Image src={'/icons/leaf.png'} alt={'leaf'} width={61.5} style={{height: 58.2, rotate: '-10deg'}}
                           height={58.2}/>
                    <h1> تا
                        <span> سلامتی </span>
                        چند کلیک فاصله داری :)
                    </h1>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        className={styles.menuIcon}>
                        <p>
                            منو غذایی
                        </p>
                        {isHovered &&
                            <WestIcon sx={{
                                fontSize: '24px',
                                width: '24px',
                                margin: '4.8px',
                            }}/>
                        }
                    </div>
                </div>
                <div className={styles.lemonImage}>
                    <Image src={'/icons/multi-lemon.png'} width={148} height={79} style={{height: 79}} alt={'lemon'}/>
                </div>
            </div>
            <Image src={'/icons/healthy-food.png'} alt={'healthy-food'} width={560} height={1205} style={{height: 1205, position: 'absolute', top: -360, zIndex: -1}}/>
        </div>
    );
};

export default Index;