class Booking < ApplicationRecord
    validates :check_in_date, :check_out_date, :num_guests, presence: true

    belongs_to :listing,
    primary_key: :id,
    foreign_key: :listing_id,
    class_name: :Listing

    belongs_to :guest,
    primary_key: :id,
    foreign_key: :guest_id,
    class_name: :User
end
