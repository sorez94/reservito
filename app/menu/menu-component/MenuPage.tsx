'use client';
import React from 'react';
import ImageBanner from "@/app/menu/menu-component/ImageBanner";
import FoodCarousel from "@/app/menu/menu-component/FoodCarousel";
import FoodComments from "@/app/menu/menu-component/FoodComments";
import {FoodProvider, useFood} from "@/app/menu/context/FoodContext";

const MenuPage = ({ foods }) => {
    return (
        <FoodProvider>
            <MenuContent foods={foods} />
        </FoodProvider>
    );
};

const MenuContent = ({ foods }) => {
    const { foodId } = useFood();
    const food = foods?.filter(m => Number(m.id) == foodId);
    return (
        <>
            <ImageBanner food={food[0]} />
            <FoodCarousel foods={foods} />
            <FoodComments food={food[0]} />
        </>
    );
};

export default MenuPage;
