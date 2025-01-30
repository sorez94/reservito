"use client"
import React from "react";

const FoodComments = ({food}) => {
    console.log(food)
    return (
        <div className='m-[60px_120px]'>
            <div
                className="w-fit bg-[rgba(187,187,187,0.19)] px-10 py-3 rounded-[30px] text-center text-lg font-bold text-[22px] shadow-[0px_4px_10px_rgba(0,0,0,0.2)]">
                نظرات کاربران
            </div>
            <div>
                {food?.comments?.length > 0 ? (
                    food?.comments?.map((comment, index) => (
                        <div
                            key={comment.id}
                            className={`flex p-[40px_0px] text-[20px] ${
                                index !== food.comments.length - 1 ? "border-b border-[#B2B2B2]" : ""
                            }`}
                        >
                            <div className='ml-[80px] text-gray-500 font-bold'>
                                <p className='mb-[10px]'>{comment.persianName}</p>
                                <p>{comment.date}</p>
                            </div>
                            <p className='text-[#4C4C4C] font-bold'>{comment.comment}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-right text-gray-500">هیچ نظری برای این غذا ثبت نشده است.</p>
                )}
            </div>
        </div>
    );
};

export default FoodComments;
