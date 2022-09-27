import React, { Component } from 'react';
import Header from '../splash/Header';

class ShowListing extends React.Component {
    constructor(props) {
        super(props);

        this.listingId = parseInt(this.props.match.params.id);
    }

    componentDidMount() {
        this.props.getListing(this.listingId);
    }

    render() {

        return (
            <div>
                <Header />
                <div className="show-listing-title-info-container">
                    <p className="show-listing-title">
                        Title
                    </p>
    
                </div>
            </div>
        )
    } 

}

export default ShowListing;
