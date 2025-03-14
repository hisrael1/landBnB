class Api::BookingsController < ApplicationController
    def index
        if params[:guest_id] != "null"
            @bookings = Booking.where(guest_id: params[:guest_id])
        else
            @bookings = Booking.all
        end
        if @bookings
            render json: @bookings
        end
    end

    def create
        @booking = Booking.new(booking_params)
        if @booking.save
            render json: @booking
        else
            render json: @booking.errors.full_messages
        end
    end

    private

    def booking_params
        params.require(:booking).permit(:check_in_date, :check_out_date, :guest_id, :num_guests, :listing_id)
    end
end
