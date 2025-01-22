import React from 'react';
import MenuCard from "@/app/menu/menu-component/MenuCard";

export const revalidate = 3600; // Revalidate every hour

const Page = async () => {
    const data = await fetch("http://localhost:3001/foods");
    const foods: Array<IMenuCard> = await data.json();
    const foodItem = foods.find((m:IMenuCard) => Number(m.id) === 1);

    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            {foodItem && <MenuCard food={foodItem} />}
        </div>
    );
};

export default Page;
