import React from 'react';

const ReviewsItem = (props) => {

    
    return (
        <div class="reviews-item-container">
            <div class="profile-and-date-container">
                <img src={window.blank_user_profile} class="review-profile-pic"></img>
                <div className="reviewer-and-date">
                    <p> Harry Israel </p>
                    <p> Oct 2022 </p>
                </div>
                
            </div>
            <div class="review-text"> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. quis nostrud exercitation ullamco laboris 
                nisi ut aliquip
            </div>
        </div>
    )
}

// each listing has many reviews.
// each host has many reviews

export default ReviewsItem;
