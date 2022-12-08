import React from 'react';

const ReviewsItem = (props) => {  

    if (props.user) {
        if (!Object.keys(props.user).includes("photoUrl")) {
            props.user.photoUrl = window.blank_user_profile;
        }
    }

    return (
        <div className="reviews-item-container">
            <div className="profile-and-date-container">
                {props.user 
                    ?
                <img src={props.user.photoUrl} className="review-profile-pic"></img>
                    :
                    null
                }
                <div className="reviewer-and-date">
                    <p> {props.user ? props.user.first_name : null} </p>
                    <p> Oct 2022 </p>
                </div>
                
            </div>
            <div className="review-text"> 
                {props.review.body}
            </div>
        </div>
    )
}

export default ReviewsItem;
