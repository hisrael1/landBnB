import React from 'react';
import MarkerManager from '../../util/marker_manager';

class ListingsMap extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const mapOptions = {
          center: { lat: 40.7359, lng: -73.9911 }, 
          zoom: 13
        };
    
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
    }

    componentDidUpdate(prevProps) {
        if (this.props != prevProps && !!this.props.listings.length) {
            this.props.listings.map(listing => {
                if (!!listing.lat && !!listing.lng) {
                    this.MarkerManager.updateMarkers(listing);    
                }
            })
        }
    }

    render() {
        return (
            <div id="map-container" ref={ map => this.mapNode = map }></div>
        )
    }
}

export default ListingsMap;
