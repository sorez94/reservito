"use client";
import React, {createContext, ReactNode, useContext, useState} from "react";

type FoodContextType = {
    foodId: number;
    setFoodId: (id: number) => void;
};

const FoodContext = createContext<FoodContextType | null>(null);

export const FoodProvider = ({children}: { children: ReactNode }) => {
    const [foodId, setFoodId] = useState(1);

    return (
        <FoodContext.Provider value={{foodId, setFoodId}}>
            {children}
        </FoodContext.Provider>
    );
};

export const useFood = (): FoodContextType => {
    const context = useContext(FoodContext);
    if (!context) {
        throw new Error("useFood must be used within a FoodProvider");
    }
    return context;
};
