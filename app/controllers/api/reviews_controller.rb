class Api::ReviewsController < ApplicationController
    def index 
        @reviews = Review.all
        if @reviews
            render json: @reviews
        end
    end

    def create
        @review = Review.new(review_params)
        if @review.save
            render json: @review
        else
            render json: @review.errors.full_messages
        end
    end

    def review_params
        params.require(:review).permit(:listing_id, :guest_id, :rating, :body, :cleanliness, :communication, :check_in, :accuracy, :value, :location)
    end
end
