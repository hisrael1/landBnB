class Api::ListingsController < ApplicationController
    def create
        @listing = Listing.new(listing_params)

        if @listing.save
            #might want to use jbuilder instead
            render json: @listing
        end
    end

    private

    def listing_params
        params.require(:listing).permit(:title, :description, :host_id, :address, :city, :state, :zipcode, :num_beds, :num_baths, :max_num_guests, :price_per_night)
    end

end
