import React from 'react';
import ReviewsItem from './ReviewItem';

const ReviewsIndex = (props) => {

    const reviewsText = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. quis nostrud exercitation ullamco laboris nisi ut aliquip",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. quis nostrud exercitation ullamco laboris nisi ut aliquip",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. quis nostrud exercitation ullamco laboris nisi ut aliquip",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. quis nostrud exercitation ullamco laboris nisi ut aliquip"
    ];
    
    return (
        <div id="reviews-index-container"> 
            <div id="reviews-ratings-container">
                <p id="reviews-ratings">&#9733; 4.8 <span>&#183;</span> 4 reviews </p>
                <p className="underline" onClick={() => props.history.push(`/listing/${props.listing.id}/review/new`)}>Write a review</p>
            </div>

            <div id='review-attribute-container'>
                    <div id='review-attribute-container-left'>
                        <div className="review-attribute-item-container">
                            <p className='review-attribute'> Cleanliness</p> <span> 4.9 &#9733;</span>
                        </div>

                        <div className="review-attribute-item-container">
                            <p className='review-attribute'> Communication </p> <span> 4.9 &#9733;</span>
                        </div>

                        <div className="review-attribute-item-container">
                            <p className='review-attribute'> Check-in </p> <span> 4.9 &#9733;</span>
                        </div>
                        
                    </div>

                    <div id='review-attribute-container-right'>
                        <div className="review-attribute-item-container">
                            <p className='review-attribute'> Accuracy </p> <span> 4.9 &#9733;</span>
                        </div>
                            
                        <div className="review-attribute-item-container">
                            <p className='review-attribute'> Location </p> <span> 4.9 &#9733;</span>
                        </div>

                        <div className="review-attribute-item-container">
                            <p className='review-attribute'> Value </p> <span> 4.9 &#9733;</span> 
                        </div>                       
                    </div>
            </div>

            <div id="reviews-container">
                <div id="reviews-container-left">
                    {reviewsText.map((text, idx) => {           
                        return (
                            idx % 2 == 0 ?
                                <ReviewsItem reviewText={text} key={idx}/>
                            :
                            null
                        )
                    })}
                </div>
                <div id="reviews-container-right">
                    {reviewsText.map((text, idx) => {           
                        return (
                            idx % 2 == 0 ?
                            null
                            :
                            <ReviewsItem reviewText={text} key={idx}/> 
                        )
                    })}
                </div>
            </div>

            <div className="reviews-bottom-underline"></div>
        </div>
    )
}

export default ReviewsIndex;
