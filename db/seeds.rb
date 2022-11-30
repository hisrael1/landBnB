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
        description: 
            "Come experience the vibrancy of Miami! You will feel perfectly at home in this new 7 bedroom bath luxury Villa. Boasts 
            a gorgeous waterfront backyard & a beautifully designed interior conveniently located 10 minutes from Miami beach. You won't want to 
            miss this.",
        host_id: 1,
        address: "200 Biscayne Blvd",
        city: "Miami",
        state: "Florida",
        zipcode: 33131,
        num_beds: 7,
        num_baths: 7,
        max_num_guests: 10,
        price_per_night: 1749,
        lat: 25.7721896,
        lng: -80.1881168
    })

listing1.photos.attach(io: File.open('app/assets/images/miami-villa-1.jpg'), filename: 'cool_house.jpg')
listing1.photos.attach(io: File.open('app/assets/images/miami-villa-2.webp'), filename: 'miami-villa-2.webp')
listing1.photos.attach(io: File.open('app/assets/images/miami-villa-3.jpg'), filename: 'miami-villa-3.jpg')
listing1.photos.attach(io: File.open('app/assets/images/miami-villa-4.jpg'), filename: 'miami-villa-4.jpg')
listing1.photos.attach(io: File.open('app/assets/images/miami-villa-5.jpg'), filename: 'miami-villa-5.jpg')


listing2 = Listing.create({
    title: "Cozy Lakeside Cabin",
    description:
        "This is your “home away from home” to make those dreams come true.  Your own private dock will be just the place to settle for a day
        of water activity and fun in the sun. Watching the sunset as it disappears behind the mountain peaks, after displaying 
        a colorful infusion of light on the face of this pristine mountain lake, is a magnificent way to end a truly remarkable day.",  
    host_id: 1,
    address: "150 Helen St",
    city: "Lake George",
    state: "New York",
    zipcode: 12845,
    num_beds: 4,
    num_baths: 3,
    max_num_guests: 6,
    price_per_night: 500,
    lat: 43.4263611,
    lng: -73.7156412
})

listing2.photos.attach(io: File.open('app/assets/images/lakegeorge1.png'), filename: 'lakegeorge1.png')
listing2.photos.attach(io: File.open('app/assets/images/lakegeorge2.png'), filename: 'lakegeorge2.png')
listing2.photos.attach(io: File.open('app/assets/images/lakegeorge3.png'), filename: 'lakegeorge3.png')
listing2.photos.attach(io: File.open('app/assets/images/lakegeorge4.png'), filename: 'lakegeorge4.png')
listing2.photos.attach(io: File.open('app/assets/images/lakegeorge5.png'), filename: 'lakegeorge5.png')

listing3 = Listing.create({
    title: "Quaint Montauk Getaway",
    description:
        "Get ready to say hello to crashing waves and picturesque blue backdrops right outside your window. Located within 5 minutes 
        of Ditch Plains beach and a 10 minute drive into town, you can't go wrong here. Book this rental and have the stay of a lifetime.",
    host_id: 15,
    address: "10 Otis Rd",
    city: "Montauk",
    state: "New York",
    zipcode: 11954,
    num_beds: 2,
    num_baths: 2,
    max_num_guests: 3,
    price_per_night: 285,
    lat: 41.0413279,
    lng: -71.91422179999999
})

listing3.photos.attach(io: File.open('app/assets/images/montauk1.jpg'), filename: 'montauk1.jpg')
listing3.photos.attach(io: File.open('app/assets/images/montauk2.jpg'), filename: 'montauk2.jpg')
listing3.photos.attach(io: File.open('app/assets/images/montauk3.jpg'), filename: 'montauk3.jpg')
listing3.photos.attach(io: File.open('app/assets/images/montauk4.webp'), filename: 'montauk4.webp')
listing3.photos.attach(io: File.open('app/assets/images/montauk5.jpg'), filename: 'montauk5.jpg')
















# listing7 = Listing.create({
#     title: "Spacious Brooklyn Studio",
#     description: "Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum ",
#     host_id: 1,
#     address: "555 Manhattan Avenue",
#     city: "Green Point",
#     state: "New York",
#     zipcode: 11234,
#     num_beds: 4,
#     num_baths: 2,
#     max_num_guests: 4,
#     price_per_night: 300,
#     lat: 40.72216,
#     lng: -73.94992
# })
