class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
    }

    updateMarkers(listing) {
        const marker = new google.maps.Marker({
            position: { lat: listing.lat, lng: listing.lng },
            title: listing.title,
        });

        marker.setMap(this.map);
    }
}

export default MarkerManager;
