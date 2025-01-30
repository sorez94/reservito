import React from "react";
import MenuPage from "@/app/menu/menu-component/MenuPage";
import {fetchFoods} from "@/app/menu/data/foodsData";

async function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function Page() {
    await delay(20000)
    const foods = await fetchFoods();
    return <MenuPage foods={foods}/>
}
