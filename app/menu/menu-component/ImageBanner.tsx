"use client";
import React from "react";

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
