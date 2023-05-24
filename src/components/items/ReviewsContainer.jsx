import React from "react";
import { Reviews } from "./Reviews";

export const ReviewsContainer = ({ movieReviews }) => {
    return (
        <div className="item-container">         
                {movieReviews &&
                  movieReviews.map((data) => <Reviews key={data.id} data={data} />)}
        </div>
    );
};
