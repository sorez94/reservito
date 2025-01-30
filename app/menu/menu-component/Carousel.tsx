"use client";
import React, {useEffect, useRef, useState} from "react";
import styles from "../styles/Carousel.module.scss";
import MenuCard from "./MenuCard";

const Carousel = ({items, scrollDirection = "rtl"}: { items: IMenuCard[], scrollDirection?: "rtl" | "ltr" }) => {
    const scrollSpeed = 15;
    const [clonedItems, setClonedItems] = useState<IMenuCard[]>([]);
    const carouselRef = useRef<HTMLDivElement>(null);
    const scrollStep = 400;
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        setClonedItems([...items, ...items, ...items, ...items, ...items]);
    }, [items]);

    // useEffect(() => {
    //     startAutoScroll();
    //     return () => stopAutoScroll();
    // }, []);

    // const startAutoScroll = () => {
    //     stopAutoScroll();
    //     intervalRef.current = setInterval(() => {
    //         if (carouselRef.current) {
    //             if (scrollDirection === "rtl") {
    //                 carouselRef.current.scrollLeft -= scrollSpeed;
    //             } else {
    //                 carouselRef.current.scrollLeft += scrollSpeed;
    //             }
    //             if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth / 2) {
    //                 carouselRef.current.scrollLeft = 0;
    //             }
    //         }
    //     }, 20);
    // };

    const stopAutoScroll = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
    };

    const handleItemClick = (id: number) => {
    };

    const handleScroll = (direction: "left" | "right") => {
        if (carouselRef.current) {
            if (direction === "left") {
                carouselRef.current.scrollLeft -= scrollStep;
            } else {
                carouselRef.current.scrollLeft += scrollStep;
            }
        }
    };

    return (
        <div className={styles.carouselContainer}>
            <button className={styles.navButton} onClick={() => handleScroll("left")}>&#10094;</button>
            <div className={styles.carousel} ref={carouselRef}>
                {clonedItems.map((food, index) => (
                    <MenuCard key={index} food={food}/>
                ))}
            </div>
            <button className={styles.navButton} onClick={() => handleScroll("right")}>&#10095;</button>
        </div>
    );
};

export default Carousel;
