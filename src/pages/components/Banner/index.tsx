import React, {useState} from 'react';
import styles from "../../../styles/Banner.module.scss"
import WestIcon from '@mui/icons-material/West';
import Image from "next/image";

const Index = () => {
    const [isHovered, setIsHovered] = useState(false);
    const containerStyle:any = {
        position: 'relative',
        width: '76px',
        height: '87px',
    };

    const baseImageStyle:any = {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    };

    const rotatedImageStyle:any = {
        ...baseImageStyle,
        transform: 'rotate(80deg)', // Adjust rotation angle
        zIndex: 1, // Ensures it appears above the base image
    };
    return (
        <div style={{margin: '170px 127px 0 0'}}>
            <span className={styles.bannerSlogan}> وقتشه به <span
                className={styles.health}> سلامتیت</span> اهمیت بدی</span>
            <p style={{marginTop: 21, fontSize: 20}}>با چند تا کلیک ساده غذای سالم خونگی سفارش بده :)</p>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <div
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className={styles.scheduleIcon}>
                    <p>
                        بریم برنامه هفتگی ببینیم
                    </p>
                    {isHovered &&
                        <WestIcon sx={{
                            fontSize: '24px',
                            width: '24px',
                            margin: '4.8px',
                        }}/>
                    }
                </div>
                <div style={containerStyle}>
                    <Image
                        src="/icons/lemon.png"
                        alt="Base"
                        layout="fill"
                        style={baseImageStyle}
                    />
                    <Image
                        src="/icons/lemon.png"
                        alt="Overlay"
                        layout="fill"
                        style={rotatedImageStyle}
                    />
                </div>
            </div>
        </div>
    );
};

export default Index;
