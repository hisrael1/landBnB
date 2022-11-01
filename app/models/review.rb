class Review < ApplicationRecord
    validates :rating, :body, :cleanliness, :communication, :check_in, :accuracy, :value, :location, presence: true

    belongs_to :listing,
    primary_key: :id,
    foreign_key: :listing_id,
    class_name: :Listing

    belongs_to :guest,
    primary_key: :id,
    foreign_key: :guest_id,
    class_name: :User
end
