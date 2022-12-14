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
# UNCOMMENT OUT BELOW!!
# listing1 = Listing.create({
#         title: "Luxury Miami Villa",
#         description: 
#             "Come experience the vibrancy of Miami! You will feel perfectly at home in this new 7 bedroom bath luxury Villa. Boasts 
#             a gorgeous waterfront backyard & a beautifully designed interior conveniently located 10 minutes from Miami beach. You won't want to 
#             miss this.",
#         host_id: 1,
#         address: "200 Biscayne Blvd",
#         city: "Miami",
#         state: "Florida",
#         zipcode: 33131,
#         num_beds: 7,
#         num_baths: 7,
#         max_num_guests: 10,
#         price_per_night: 1749,
#         lat: 25.7721896,
#         lng: -80.1881168
#     })

# listing1.photos.attach(io: File.open('app/assets/images/miami-villa-1.jpg'), filename: 'cool_house.jpg')
# listing1.photos.attach(io: File.open('app/assets/images/miami-villa-2.webp'), filename: 'miami-villa-2.webp')
# listing1.photos.attach(io: File.open('app/assets/images/miami-villa-3.jpg'), filename: 'miami-villa-3.jpg')
# listing1.photos.attach(io: File.open('app/assets/images/miami-villa-4.jpg'), filename: 'miami-villa-4.jpg')
# listing1.photos.attach(io: File.open('app/assets/images/miami-villa-5.jpg'), filename: 'miami-villa-5.jpg')


# listing2 = Listing.create({
#     title: "Cozy Lakeside Cabin",
#     description:
#         "This is your “home away from home” to make those dreams come true.  Your own private dock will be just the place to settle for a day
#         of water activity and fun in the sun. Watching the sunset as it disappears behind the mountain peaks, after displaying 
#         a colorful infusion of light on the face of this pristine mountain lake, is a magnificent way to end a truly remarkable day.",  
#     host_id: 1,
#     address: "150 Helen St",
#     city: "Lake George",
#     state: "New York",
#     zipcode: 12845,
#     num_beds: 4,
#     num_baths: 3,
#     max_num_guests: 6,
#     price_per_night: 500,
#     lat: 43.4263611,
#     lng: -73.7156412
# })

# listing2.photos.attach(io: File.open('app/assets/images/lakegeorge1.png'), filename: 'lakegeorge1.png')
# listing2.photos.attach(io: File.open('app/assets/images/lakegeorge2.png'), filename: 'lakegeorge2.png')
# listing2.photos.attach(io: File.open('app/assets/images/lakegeorge3.png'), filename: 'lakegeorge3.png')
# listing2.photos.attach(io: File.open('app/assets/images/lakegeorge4.png'), filename: 'lakegeorge4.png')
# listing2.photos.attach(io: File.open('app/assets/images/lakegeorge5.png'), filename: 'lakegeorge5.png')

# listing3 = Listing.create({
#     title: "Quaint Montauk Getaway",
#     description:
#         "Get ready to say hello to crashing waves and picturesque blue backdrops right outside your window. Located within 5 minutes 
#         of Ditch Plains beach and a 10 minute drive into town, you can't go wrong here. Book this rental and have the stay of a lifetime.",
#     host_id: 1,
#     address: "10 Otis Rd",
#     city: "Montauk",
#     state: "New York",
#     zipcode: 11954,
#     num_beds: 2,
#     num_baths: 2,
#     max_num_guests: 3,
#     price_per_night: 285,
#     lat: 41.0413279,
#     lng: -71.91422179999999
# })

# listing3.photos.attach(io: File.open('app/assets/images/montauk1.jpg'), filename: 'montauk1.jpg')
# listing3.photos.attach(io: File.open('app/assets/images/montauk2.jpg'), filename: 'montauk2.jpg')
# listing3.photos.attach(io: File.open('app/assets/images/montauk3.jpg'), filename: 'montauk3.jpg')
# listing3.photos.attach(io: File.open('app/assets/images/montauk4.webp'), filename: 'montauk4.webp')
# listing3.photos.attach(io: File.open('app/assets/images/montauk5.jpg'), filename: 'montauk5.jpg')

# listing4 = Listing.create({
#     title: "Relaxing 2 Bedroom in Newport Rhode Island",
#     description:
#         "Keyless entry, arrive and let yourself in easily. The house is 2 streets from the downtown area and an easy 15 min walk to the Beach. 
#         There is also 1 Parking Pass waiting for you. Late check out may be available if you are waiting for a late flight to 
#         take you home.  You'll love my place because of the water views, the location, the outdoors space, and the ambiance. ",
#     host_id: 1,
#     address: "120 Ruggles Ave",
#     city: "Newport",
#     state: "Rhode Island",
#     zipcode: 2840,
#     num_beds: 2,
#     num_baths: 2,
#     max_num_guests: 2,
#     price_per_night: 324,
#     lat: 41.46740320000001,
#     lng: -71.31328839999999
# })

# listing4.photos.attach(io: File.open('app/assets/images/newport1.webp'), filename: 'newport1.webp')
# listing4.photos.attach(io: File.open('app/assets/images/newport2.jpg'), filename: 'newport2.jpg')
# listing4.photos.attach(io: File.open('app/assets/images/newport3.webp'), filename: 'newport3.webp')
# listing4.photos.attach(io: File.open('app/assets/images/newport5.png'), filename: 'newport5.png')
# listing4.photos.attach(io: File.open('app/assets/images/newport6.jpg'), filename: 'newport6.jpg')

# listing5 = Listing.create({
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

# listing5.photos.attach(io: File.open('app/assets/images/brooklyn1.webp'), filename: 'brooklyn1.webp')
# listing5.photos.attach(io: File.open('app/assets/images/brooklyn2.jpg'), filename: 'brooklyn2.jpg')
# listing5.photos.attach(io: File.open('app/assets/images/brooklyn3.jpg'), filename: 'brooklyn3.jpg')
# listing5.photos.attach(io: File.open('app/assets/images/brooklyn4.jpg'), filename: 'brooklyn4.jpg')
# listing5.photos.attach(io: File.open('app/assets/images/brooklyn5.jpg'), filename: 'brooklyn5.jpg')

listing6 = Listing.create({
    title: "Downtown Nashville Apartment",
    description: "Unwind in this beautiful downtown Nashville suite! This complex is located walking distance from many local bars, restaurants, and attractions. The complex offers amenities including a heated saltwater pool, a lounge with panoramic views of the city, and a fully equipped gym!",
    host_id: 1,
    address: "124 Church St",
    city: "Nashville",
    state: "Tennessee",
    zipcode: 37201,
    num_beds: 1,
    num_baths: 1,
    max_num_guests: 2,
    price_per_night: 232,
    lat: 36.164780,
    lng: -86.776630
})

listing6.photos.attach(io: File.open('app/assets/images/nashville1.jpg'), filename: 'nashville1.jpg')
listing6.photos.attach(io: File.open('app/assets/images/nashville2.jpg'), filename: 'nashville2.jpg')
listing6.photos.attach(io: File.open('app/assets/images/nashville3.jpg'), filename: 'nashville3.jpg')
listing6.photos.attach(io: File.open('app/assets/images/nashville4.jpg'), filename: 'nashville4.jpg')
listing6.photos.attach(io: File.open('app/assets/images/nashville5.webp'), filename: 'nashville5.webp')

listing7 = Listing.create({
    title: "Scranton Apartment - Great Value!",
    description: "We gladly welcome you to this cozy apartment which will immediately feel like home away from home. Equipped with fast WIFI, kitchen essentials, Smart TV’s, & laundry on site. It is located in Downtown Scranton with plenty of local restaurants and smaller attractions to visit in Historic Steamtown!",
    host_id: 15,
    address: "309 Linden St",
    city: "Scranton",
    state: "Pennsylvania",
    zipcode: 18503,
    num_beds: 2,
    num_baths: 1,
    max_num_guests: 3,
    price_per_night: 140,
    lat: 41.410540,
    lng: -75.664530
})

listing7.photos.attach(io: File.open('app/assets/images/scranton1.jpg'), filename: 'scranton1.jpg')
listing7.photos.attach(io: File.open('app/assets/images/scranton2.jpg'), filename: 'scranton2.jpg')
listing7.photos.attach(io: File.open('app/assets/images/scranton3.jpg'), filename: 'scranton3.jpg')
listing7.photos.attach(io: File.open('app/assets/images/scranton4.jpg'), filename: 'scranton4.jpg')
listing7.photos.attach(io: File.open('app/assets/images/scranton5.jpeg'), filename: 'scranton5.jpeg')

listing8 = Listing.create({
    title: "Gorgeous Mansion - Richmond",
    description: "This listing is truly one of a kind in Richmond! Whether you're looking for a place for your wedding party, hosting a family gathering, or just taking a trip with a group, this home has everything you could need. 5 large bedrooms, as well as an upstairs living room/game room. Loads of space downstairs for everyone to interact as well!",
    host_id: 15,
    address: "48 Bicknell Rd",
    city: "Richmond",
    state: "Virginia",
    zipcode: 23235,
    num_beds: 5,
    num_baths: 4,
    max_num_guests: 8,
    price_per_night: 410,
    lat: 37.5390313,
    lng: -77.5525034
})

listing8.photos.attach(io: File.open('app/assets/images/richmond1.jpg'), filename: 'richmond1.jpg')
listing8.photos.attach(io: File.open('app/assets/images/richmond2.webp'), filename: 'richmond2.webp')
listing8.photos.attach(io: File.open('app/assets/images/richmond3.jpg'), filename: 'richmond3.jpg')
listing8.photos.attach(io: File.open('app/assets/images/richmond4.jpg'), filename: 'richmond4.jpg')
listing8.photos.attach(io: File.open('app/assets/images/richmond5.webp'), filename: 'richmond5.webp')

# Local seeds

# Booking.create({
#     check_in_date: "2022-10-04",
#     check_out_date: "2022-01-09",
#     num_guests: 3,
#     guest_id: 15,
#     listing_id: 13
# })

# Booking.create({
#     check_in_date: "2022-11-03",
#     check_out_date: "2022-11-06",
#     num_guests: 3,
#     guest_id: 15,
#     listing_id: 47
# })

# Booking.create({
#     check_in_date: "2022-11-11",
#     check_out_date: "2022-11-15",
#     num_guests: 3,
#     guest_id: 15,
#     listing_id: 45
# })

# Booking.create({
#     check_in_date: "2022-11-20",
#     check_out_date: "2022-11-22",
#     num_guests: 3,
#     guest_id: 15,
#     listing_id: 44
# })

# Booking.create({
#     check_in_date: "2023-3-20",
#     check_out_date: "2023-3-25",
#     num_guests: 4,
#     guest_id: 15,
#     listing_id: 47
# })

# Heroku seeds
# Booking.destroy_all
# Booking.create({
#     check_in_date: "2022-10-04",
#     check_out_date: "2022-01-09",
#     num_guests: 3,
#     guest_id: 1,
#     listing_id: 13
# })

# Booking.create({
#     check_in_date: "2022-11-03",
#     check_out_date: "2022-11-06",
#     num_guests: 3,
#     guest_id: 1,
#     listing_id: 17
# })

# Booking.create({
#     check_in_date: "2022-11-11",
#     check_out_date: "2022-11-15",
#     num_guests: 3,
#     guest_id: 1,
#     listing_id: 15
# })

# Booking.create({
#     check_in_date: "2022-11-20",
#     check_out_date: "2022-11-22",
#     num_guests: 3,
#     guest_id: 1,
#     listing_id: 16
# })

# Booking.create({
#     check_in_date: "2023-3-20",
#     check_out_date: "2023-3-25",
#     num_guests: 4,
#     guest_id: 1,
#     listing_id: 13
# })

# Local Seeds
# Review.create({listing_id: 13, guest_id: 42, rating: 4.0, body: "I had a fantastic stay here. The living space was very spacious and the location was great as well. I would stay here again under the condition that the price doesn't go up.", cleanliness: 4.0, communication: 5.0, check_in: 5.0, accuracy: 4.0, value: 5.0, location: 3.0})
# Review.create({listing_id: 13, guest_id: 43, rating: 4.0, body: "I had an upsetting time. The place was dirty and not as advertised. I like that it was close to a bunch of interesting things but the actual amenities were not up to par.", cleanliness: 4.0, communication: 5.0, check_in: 5.0, accuracy: 4.0, value: 5.0, location: 3.0})
# Review.create({listing_id: 13, guest_id: 45, rating: 4.0, body: "I enjoyed my time here very much. The views were beautiful, the place was good value. I wouldn't think twice to book again!", cleanliness: 4.0, communication: 5.0, check_in: 5.0, accuracy: 4.0, value: 5.0, location: 3.0})
# Review.create({listing_id: 13, guest_id: 44, rating: 4.0, body: "What a place! I've stayed in many LandBnb listings before, but this one takes the cake. Wow!", cleanliness: 4.0, communication: 5.0, check_in: 5.0, accuracy: 4.0, value: 5.0, location: 3.0})

# Local User seeds
# user2 = User.create({email: "dgray@binghamton.edu", first_name: "David", last_name: "Gray", password: "password"})
# user2.photo.attach(io: File.open('app/assets/images/david_headshot.jpg'), filename: 'david_headshot.jpg')

# user3 = User.create({email: "harrisonisrael23@gmail.com", first_name: "Harrison", last_name: "Israel", password: "password"})
# user3.photo.attach(io: File.open('app/assets/images/myself_headshot.jpg'), filename: 'myself_headshot.jpg')

# user4 = User.create({email: "sisrael12@binghamton.edu", first_name: "Sam", last_name: "Israel", password: "password"})
# user4.photo.attach(io: File.open('app/assets/images/sam_headshot.PNG'), filename: 'sam_headshot.PNG')

# user5 = User.create({email: "mlambo@binghamton.edu", first_name: "Michael", last_name: "Lambert", password: "password"})
# user5.photo.attach(io: File.open('app/assets/images/lambert_headshot.jpg'), filename: 'lambert_headshot.jpg')

# Heroku seeds
# Review.destroy_all
# Review.create({listing_id: 13, guest_id: 2, rating: 4.0, body: "I had a fantastic stay here. The living space was very spacious and the location was great as well. I would stay here again under the condition that the price doesn't go up.", cleanliness: 4.0, communication: 5.0, check_in: 5.0, accuracy: 4.0, value: 5.0, location: 3.0})
# Review.create({listing_id: 13, guest_id: 5, rating: 4.0, body: "I had an upsetting time. The place was dirty and not as advertised. I like that it was close to a bunch of interesting things but the actual amenities were not up to par.", cleanliness: 4.0, communication: 5.0, check_in: 5.0, accuracy: 4.0, value: 5.0, location: 3.0})
# Review.create({listing_id: 13, guest_id: 3, rating: 4.0, body: "I enjoyed my time here very much. The views were beautiful, the place was good value. I wouldn't think twice to book again!", cleanliness: 4.0, communication: 5.0, check_in: 5.0, accuracy: 4.0, value: 5.0, location: 3.0})
# Review.create({listing_id: 13, guest_id: 4, rating: 4.0, body: "What a place! I've stayed in many LandBnb listings before, but this one takes the cake. Wow!", cleanliness: 4.0, communication: 5.0, check_in: 5.0, accuracy: 4.0, value: 5.0, location: 3.0})

# Review.create({listing_id: 14, guest_id: 2, rating: 4.0, body: "I had a fantastic stay here. The living space was very spacious and the location was great as well. I would stay here again under the condition that the price doesn't go up.", cleanliness: 4.0, communication: 5.0, check_in: 5.0, accuracy: 4.0, value: 5.0, location: 3.0})
# Review.create({listing_id: 14, guest_id: 5, rating: 4.0, body: "I had an upsetting time. The place was dirty and not as advertised. I like that it was close to a bunch of interesting things but the actual amenities were not up to par.", cleanliness: 4.0, communication: 5.0, check_in: 5.0, accuracy: 4.0, value: 5.0, location: 3.0})
# Review.create({listing_id: 14, guest_id: 3, rating: 4.0, body: "I enjoyed my time here very much. The views were beautiful, the place was good value. I wouldn't think twice to book again!", cleanliness: 4.0, communication: 5.0, check_in: 5.0, accuracy: 4.0, value: 5.0, location: 3.0})
# Review.create({listing_id: 14, guest_id: 4, rating: 4.0, body: "What a place! I've stayed in many LandBnb listings before, but this one takes the cake. Wow!", cleanliness: 4.0, communication: 5.0, check_in: 5.0, accuracy: 4.0, value: 5.0, location: 3.0})

# Review.create({listing_id: 15, guest_id: 2, rating: 4.0, body: "I had a fantastic stay here. The living space was very spacious and the location was great as well. I would stay here again under the condition that the price doesn't go up.", cleanliness: 4.0, communication: 5.0, check_in: 5.0, accuracy: 4.0, value: 5.0, location: 3.0})
# Review.create({listing_id: 15, guest_id: 5, rating: 4.0, body: "I had an upsetting time. The place was dirty and not as advertised. I like that it was close to a bunch of interesting things but the actual amenities were not up to par.", cleanliness: 4.0, communication: 5.0, check_in: 5.0, accuracy: 4.0, value: 5.0, location: 3.0})
# Review.create({listing_id: 15, guest_id: 3, rating: 4.0, body: "I enjoyed my time here very much. The views were beautiful, the place was good value. I wouldn't think twice to book again!", cleanliness: 4.0, communication: 5.0, check_in: 5.0, accuracy: 4.0, value: 5.0, location: 3.0})
# Review.create({listing_id: 15, guest_id: 4, rating: 4.0, body: "What a place! I've stayed in many LandBnb listings before, but this one takes the cake. Wow!", cleanliness: 4.0, communication: 5.0, check_in: 5.0, accuracy: 4.0, value: 5.0, location: 3.0})

# Review.create({listing_id: 16, guest_id: 2, rating: 4.0, body: "I had a fantastic stay here. The living space was very spacious and the location was great as well. I would stay here again under the condition that the price doesn't go up.", cleanliness: 4.0, communication: 5.0, check_in: 5.0, accuracy: 4.0, value: 5.0, location: 3.0})
# Review.create({listing_id: 16, guest_id: 5, rating: 4.0, body: "I had an upsetting time. The place was dirty and not as advertised. I like that it was close to a bunch of interesting things but the actual amenities were not up to par.", cleanliness: 4.0, communication: 5.0, check_in: 5.0, accuracy: 4.0, value: 5.0, location: 3.0})
# Review.create({listing_id: 16, guest_id: 3, rating: 4.0, body: "I enjoyed my time here very much. The views were beautiful, the place was good value. I wouldn't think twice to book again!", cleanliness: 4.0, communication: 5.0, check_in: 5.0, accuracy: 4.0, value: 5.0, location: 3.0})
# Review.create({listing_id: 16, guest_id: 4, rating: 4.0, body: "What a place! I've stayed in many LandBnb listings before, but this one takes the cake. Wow!", cleanliness: 4.0, communication: 5.0, check_in: 5.0, accuracy: 4.0, value: 5.0, location: 3.0})

# Review.create({listing_id: 17, guest_id: 2, rating: 4.0, body: "I had a fantastic stay here. The living space was very spacious and the location was great as well. I would stay here again under the condition that the price doesn't go up.", cleanliness: 4.0, communication: 5.0, check_in: 5.0, accuracy: 4.0, value: 5.0, location: 3.0})
# Review.create({listing_id: 17, guest_id: 5, rating: 4.0, body: "I had an upsetting time. The place was dirty and not as advertised. I like that it was close to a bunch of interesting things but the actual amenities were not up to par.", cleanliness: 4.0, communication: 5.0, check_in: 5.0, accuracy: 4.0, value: 5.0, location: 3.0})
# Review.create({listing_id: 17, guest_id: 3, rating: 4.0, body: "I enjoyed my time here very much. The views were beautiful, the place was good value. I wouldn't think twice to book again!", cleanliness: 4.0, communication: 5.0, check_in: 5.0, accuracy: 4.0, value: 5.0, location: 3.0})
# Review.create({listing_id: 17, guest_id: 4, rating: 4.0, body: "What a place! I've stayed in many LandBnb listings before, but this one takes the cake. Wow!", cleanliness: 4.0, communication: 5.0, check_in: 5.0, accuracy: 4.0, value: 5.0, location: 3.0})
