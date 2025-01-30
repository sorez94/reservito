import React from 'react';
import Carousel from "@/app/menu/menu-component/Carousel";

const FoodCarousel = ({foods}) => {
    return (
        <Carousel items={foods}/>
    );
}

export default React.memo(FoodCarousel);