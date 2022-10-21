json.extract! listing, :id, :title, :description, :host_id, :address, :city, :state, :zipcode, :num_beds, :num_baths, :max_num_guests, :price_per_night
json.photoUrls listing.photos.map { |file| url_for(file) }
