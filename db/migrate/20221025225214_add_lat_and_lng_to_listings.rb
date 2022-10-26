class AddLatAndLngToListings < ActiveRecord::Migration[5.2]
  def change
    add_column :listings, :lat, :float
    add_column :listings, :lng, :float
  end
end

#dont forget to delete listings without lat and lng, and then add null: false contraints
