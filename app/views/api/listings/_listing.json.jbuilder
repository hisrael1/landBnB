json.extract! listing, :id, :title, :description, :host_id, :address, :city, :state, :zipcode, :num_beds, :num_baths, :max_num_guests, :price_per_night

photo_arr = []
listing.photos.map{|photo| photo_arr.push(url_for(photo))}
