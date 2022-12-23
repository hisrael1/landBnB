# Welcome to Landbnb
Check out live link [Here](https://landbnb-us.herokuapp.com/#/) 
## Introduction
Landbnb is a basic full-stack clone of airbnb. Features include login, signup, and user auth, as well as functionality for Listings, Bookings, and Reviews.
## Technologies
- Languages: Javascript, Ruby, HTML, and CSS
- Frontend: React-Redux
- Database: PostgreSQL
- Hosting: Heroku
- Asset Storage: AWS Simple Cloud Storage (S3)
- APIs: Google Maps

### Splash and Login

Users will start off on the splash page where they can click on the menu icon to either login or signup. They can bypass this process by signing in as a demo user. They also have the option to search for listings without logging in. However, users must be logged in to book a stay, leave reviews, and upload listings.

![Splash_and_User_Auth_AdobeExpress](https://user-images.githubusercontent.com/63477927/209023071-5a47cb8c-83d1-411f-9b57-771655a5d9f2.gif)


### Search, Listings Index and Google Maps Api

The user can then specify a city along with the dates they are looking to stay and the amount of guests they have in order to search for appropriate listings.

![search__listings__map_AdobeExpress](https://user-images.githubusercontent.com/63477927/209023000-e64a3638-7db3-41fc-a2b3-c5a26fb869c7.gif)

### Booking a Listing and Trips Page

In order to book a listing, a logged in user must specify the dates there are looking to stay as well as the amount of guests they have. If the booking is invalid for any reason, the button will turn gray and the user will not be able to book a listing. Upon a successful booking the user will get directed to a page showing all the users upcoming and past trips.

![LandBnB_-_Google_Chrome_2022-12-22_21-06-50_AdobeExpress](https://user-images.githubusercontent.com/63477927/209256946-2d810a22-82cb-4b38-893d-74bcaad99355.gif)
