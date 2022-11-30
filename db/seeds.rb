# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User.destroy_all
# User.create(first_name: "Demo", last_name: "User", email: "user@demo.com", password: "password")

# Listing.destroy_all
listing1 = Listing.create({
        title: "Luxury Miami Villa",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        host_id: 1,
        address: "12000 Biscayne Blvd",
        city: "Miami",
        state: "Florida",
        zipcode: 33132,
        num_beds: 4,
        num_baths: 4,
        max_num_guests: 8,
        price_per_night: 1340,
        lat: 12.32,
        lng: 132.74
    })

listing1.photos.attach(io: File.open('app/assets/images/miami-villa-1.jpg'), filename: 'cool_house.jpg')
listing1.photos.attach(io: File.open('app/assets/images/miami-villa-2.webp'), filename: 'miami-villa-2.webp')
listing1.photos.attach(io: File.open('app/assets/images/miami-villa-3.jpg'), filename: 'miami-villa-3.jpg')
listing1.photos.attach(io: File.open('app/assets/images/miami-villa-4.jpg'), filename: 'miami-villa-4.jpg')
listing1.photos.attach(io: File.open('app/assets/images/miami-villa-5.jpg'), filename: 'miami-villa-5.jpg')
