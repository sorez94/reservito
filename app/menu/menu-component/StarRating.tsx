import React from 'react';

const StarRating = ({rating, totalStars = 5}: { rating: number, totalStars: number }) => {
    const filledStars = Math.floor(rating); // Full stars
    const halfStar = rating % 1 >= 0.5; // Check for half star
    const emptyStars = totalStars - filledStars - (halfStar ? 1 : 0); // Remaining empty stars

    return (
        <div style={{display: 'flex', gap: '5px', justifyContent: 'flex-end'}}>

            {[...Array(filledStars)].map((_, index) => (
                <span key={`filled-${index}`} style={{color: 'gold'}}>★</span>
            ))}

            {halfStar && <span style={{color: 'gold', display: 'inline-block', transform: 'scaleX(-1)'}}>⯨</span>}

            {[...Array(emptyStars)].map((_, index) => (
                <span key={`empty-${index}`}
                      style={{color: 'gray'}}>★</span>
            ))}
        </div>
    );
};

export default StarRating;
