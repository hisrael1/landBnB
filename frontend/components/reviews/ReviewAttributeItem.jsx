import React from 'react';

const ReviewAttributeItem = (props) => {

    console.log(props)

    return (
        <div className="review-attribute-item-container">
            <p className='review-attribute'> {props.attribute} </p> <span> {props.attributeRating} &#9733;</span>
        </div>
    )
}

export default ReviewAttributeItem
