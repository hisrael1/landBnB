class Listing < ApplicationRecord

    # Validate host id?
    validates :title, :description, :address, :city, :state, :zipcode, :num_beds, :num_baths, :max_num_guests, :price_per_night, presence: true
    validates :address, uniqueness: true

    belongs_to :host,
    primary_key: :id,
    foreign_key: :host_id,
    class_name: :User

    has_many_attached :photos, dependent: :destroy
end
