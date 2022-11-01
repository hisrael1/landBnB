import React from 'react';
import Header from '../splash/Header';
import Footer from '../splash/Footer'
import Booking from './Booking';
import ListingsMap from './ListingsMap';
import ReviewsIndex from '../reviews/ReviewsIndex';

class ShowListing extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const listingId = parseInt(this.props.match.params.id);
        this.props.getListing(listingId);
        window.scrollTo(0, 0);
    }

    componentDidUpdate() {
        if (this.props.listing && !this.props.users[this.props.listing.host_id]) {
            this.props.getUser(this.props.listing.host_id);
        }
    }

    render() {
        const listing = this.props.listing ? this.props.listing: null;

        let user;
        if (listing && this.props.users[listing.host_id]) {
            user = this.props.users[listing.host_id];
        }

        let photos = [];
        if (this.props.listing) {
            for (let i = 0; i < 5; i++) {
                if (this.props.listing.photoUrls[i]) {
                    photos[i] = this.props.listing.photoUrls[i];
                } else {
                    photos[i] = window.listing_pic01;
                }
            }
        }

        return (
            <div>
                <Header />
                <div className="show-listing-title-info-container">
                    <p className="show-listing-title">
                        {listing ? listing.title : null}
                    </p>
                    <div className='show-listing-reviews-location-container'>
                        <p className='show-listing-reviews-container'> 
                            <span>&#9733; 5.0 </span>
                            <span>&#183;</span>
                            <span className='show-listing-reviews'>4 reviews</span>
                            <span>&#183;</span>
                            <span className='show-listing-reviews'>{listing ? listing.city : null}, {listing ? listing.state : null}, United States</span>
                        </p>
                    </div>

                    <div className='show-listing-photos-container'>
                        {this.props.listing ? <img src={photos[0]} className='show-listing-photo-1'/> : null }
                        <div className="show-listing-right-photos-container">
                            <div className="show-listing-right-photos">
                                {this.props.listing ? <img src={photos[1]} className='show-listing-photo-2'/> : null }

                                {this.props.listing ? <img src={photos[2]} className='show-listing-photo-3'/> : null }
                            </div>
                            <div className="show-listing-right-photos">
                                {this.props.listing ? <img src={photos[3]} className='show-listing-photo-4'/> : null }
                                {this.props.listing ? <img src={photos[4]} className='show-listing-photo-5'/> : null }
                            </div>
                        </div>
                    </div>

                    <div >
                        <div className='show-listing-hosted-by'>
                            Hosted By {user ? user.first_name : null } {user ? user.last_name : null }
                        </div>
                        <div className="show-listing-capacity-info">
                            <span>{listing ? listing.max_num_guests : null} guests</span>
                            <span>&#183; {listing ? listing.num_beds : null} beds</span>
                            <span>&#183; {listing ? listing.num_baths : null} baths</span>                            
                        </div>
                    </div>

                    <div className='show-listing-description-and-booking-container'>
                        <div className='show-listing-description'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Metus vulputate eu scelerisque felis imperdiet. Aenean euismod 
                            elementum nisi quis eleifend. Justo laoreet sit amet cursus sit amet. Amet est placerat in
                            egestas erat imperdiet sed. Feugiat in ante metus dictum. Urna et pharetra pharetra massa massa
                            ultricies mi quis hendrerit. Morbi quis commodo odio aenean sed adipiscing.
                        </div>

                        <div className='show-listing-booking-container'>
                            <Booking listing={listing}/>
                        </div>
                    </div>

                </div>

                <div className="reviews-underline"></div>

                <ReviewsIndex />
                
                <div id="show-listing-map">
                    <div id="show-listing-map-text">Where You'll Be</div>
                    <ListingsMap listing={listing} showMap={true}/>
                </div>
                <Footer />
            </div>
        )
    } 

}

export default ShowListing;
