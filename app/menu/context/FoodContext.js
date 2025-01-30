"use client";
import React, {createContext, useContext, useEffect, useState} from "react";

const FoodContext = createContext(null);

export const FoodProvider = ({ children }) => {
    const [foodId, setFoodId] = useState(1);

    return (
        <FoodContext.Provider value={{ foodId, setFoodId }}>
            {children}
        </FoodContext.Provider>
    );
};

export const useFood = () => useContext(FoodContext);
