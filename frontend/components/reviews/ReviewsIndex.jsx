import React from 'react';
import ReviewsItem from './ReviewItem';
import ReviewAttributeItem from './ReviewAttributeItem';

class ReviewsIndex extends React.Component {
    constructor(props) {
        super(props);
        this.findAttributeRating = this.findAttributeRating.bind(this);
    }

    findAttributeRating(attribute) {
        let totalAttributeRating = 0;
        this.props.reviews.map((review) => {
            totalAttributeRating += review[attribute]
        })
        const averageRoundedRating = Math.round(totalAttributeRating / this.props.reviews.length * 10) / 10;
        return averageRoundedRating
    }

    render() {        
        const reviewAttributesDisplay = ["Cleanliness", "Communication", "Check-In", "Accuracy", "Location", "Value"];
        const reviewAttributesKeys = ["cleanliness", "communication", "check_in", "accuracy", "location", "value"];
        let attributeRatings = [];
        let overallRating;
        if (this.props.reviews.length > 0) {
            overallRating = this.findAttributeRating('rating')
            reviewAttributesKeys.map((attributeKey) => {
                attributeRatings.push(this.findAttributeRating(attributeKey))
            })
        }

        return (
            <div id="reviews-outer-container"> 
            <div id="reviews-index-container"> 
                <div id="reviews-ratings-container">
                    {overallRating ? 
                        <p id="reviews-ratings">&#9733; {overallRating} <span>&#183;</span> {this.props.reviews.length} reviews </p> 
                    :
                        null
                    }
                    <p className="underline" onClick={() => this.props.history.push(`/listing/${this.props.listing.id}/review/new`)}>Write a review</p>
                </div>

                <div id='review-attribute-container'>
                    <div id='review-attribute-container-left'>
                        {reviewAttributesDisplay.slice(0, 3).map((attribute, idx) => 
                            (<ReviewAttributeItem key={idx} attribute={attribute} attributeRating={attributeRatings[idx]}/>)       
                        )}
                    </div>
                    <div id='review-attribute-container-right'>
                        {reviewAttributesDisplay.slice(3).map((attribute, idx) => 
                            (<ReviewAttributeItem key={idx} attribute={attribute} attributeRating={attributeRatings[idx]}/>)    
                        )}
                    </div>
                </div>                
    
                <div id="reviews-container">
                    <div id="reviews-container-left">
                        {this.props.reviews.map((review, idx) => {    
                            return (
                                idx % 2 == 0 ?
                                    <ReviewsItem user={this.props.users[review.guest_id]} review={review} key={idx}/>
                                :
                                    null
                            )
                        })}
                    </div>
                    <div id="reviews-container-right">
                        {this.props.reviews.map((review, idx) => {    
                            return (
                                idx % 2 == 0 ?
                                    null
                                :
                                    <ReviewsItem user={this.props.users[review.guest_id]} review={review} key={idx}/>
                            )
                        })}
                    </div>
                </div>
                
    
                <div className="reviews-bottom-underline"></div>
            </div>
            </div> 
        )
    }
}

export default ReviewsIndex;
