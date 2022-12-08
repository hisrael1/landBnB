import React from 'react';
import MarkerManager from '../../util/marker_manager';

class ListingsMap extends React.Component {
    constructor(props) {
        super(props);

        this.initializeMap = this.initializeMap.bind(this);
    }

    initializeMap() {
        let mapOptions;
        if (!this.props.listing) {
            mapOptions = {
                center: { lat: 35.000, lng: -78.000 }, 
                zoom: 5
              };
        } else {
            mapOptions = {
                center: { lat: this.props.listing.lat, lng: this.props.listing.lng }, 
                zoom: 13
              };
        }
      
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
    }

    componentDidMount() {
        this.initializeMap();
    }

    componentDidUpdate(prevProps) {
        if (this.props != prevProps) {
            this.initializeMap();
            this.MarkerManager = new MarkerManager(this.map);
            if (!!this.props.listings) {
                this.props.listings.map((listing) => {
                    if (!!listing.lat && !!listing.lng) {
                        this.MarkerManager.updateMarkers(listing);    
                    }
                })
            } else if (!!this.props.listing) {
                const listing = this.props.listing;
                if (!!listing.lat && !!listing.lng) {
                    this.MarkerManager.updateMarkers(listing);    
                }
            }
        }
    }

    render() {
        return (
            <div>
                {this.props.showMap ? <div id="show-map-container" ref={ map => this.mapNode = map }></div> : <div id="map-container" ref={ map => this.mapNode = map }></div>}
            </div>
        )
    }
}

export default ListingsMap;
