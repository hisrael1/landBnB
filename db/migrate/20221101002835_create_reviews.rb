class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :listing_id, null: false
      t.integer :guest_id, null: false
      t.float :rating, null: false
      t.string :body, null: false
      t.float :cleanliness, null: false
      t.float :communication, null: false
      t.float :check_in, null: false
      t.float :accuracy, null: false
      t.float :value, null: false
      t.float :location, null: false

      t.timestamps
    end

    add_index :reviews, :listing_id
    add_index :reviews, :guest_id
  end
end
