class Api::ListingsController < ApplicationController
    
    def index 
        @listings = Listing.all
        render json: @listings
    end
    
    def create
        @listing = Listing.new(listing_params)

        if @listing.save
            # consider using jbuilder 
            render json: @listing
        else
            render json: @listing.errors, status: 422
        end
    end

    def destroy
        @listing = Listing.find_by(id: params[:id])
        if @listing && @listing.destroy
            render json: @listing
        end
    end

    def show
        @listing = Listing.find_by(id: params[:id])
        if @listing
            render json: @listing
        else
            render json: @listing.errors
        end
    end

    def update
        @listing = Listing.find_by(id: params[:id])
        if @listing && @listing.update(listing_params)
            render json: @listing
        else
            render json: @listing.errors
        end
    end

    private

    def listing_params
        params.require(:listing).permit(:title, :description, :host_id, :address, :city, :state, :zipcode, :num_beds, :num_baths, :max_num_guests, :price_per_night)
    end

end
