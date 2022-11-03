class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.date :check_in_date, null: false
      t.date :check_out_date, null: false
      t.integer :num_guests, null: false
      t.integer :guest_id, null: false
      t.integer :listing_id, null: false
      
      t.timestamps
    end

    add_index :bookings, :guest_id
    add_index :bookings, :listing_id
  end
end
