"use client";
import React from "react";
import {useQuery} from "@tanstack/react-query";
import {fetchFoodById} from "@/app/menu/[id]/foodsData";

const ImageBanner = ({food}) => {
    return (
        <>
            <div style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "700px"
            }}>
                <>
                    <img
                        src={'/images/plate.png'}
                        alt={'plate'}
                        width={650}
                        height={650}
                        style={{position: "absolute", zIndex: 1}}
                    />
                    <img
                        src={food.image}
                        alt={food.name}
                        width={600}
                        height={600}
                        style={{position: "absolute", zIndex: 2}}
                    />
                </>
            </div>

        </>
    );
}


export default ImageBanner;
