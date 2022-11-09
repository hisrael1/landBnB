class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
    }

    updateMarkers(listing) {
        const marker = new google.maps.Marker({
            id: listing.id,
            zIndex: listing.id,
            position: { lat: listing.lat, lng: listing.lng },
            title: listing.title,
            label: {
                text: `$${listing.price_per_night.toString()}`,
                fontWeight: 'bold',
                fontSize: '18px'
            },
            icon: {
                url: window.listing_tag,
                scaledSize: new google.maps.Size(60, 30)
            }         
        });
        marker.setMap(this.map);
        google.maps.event.addDomListener(marker, 'click', () => {
            window.location.href = `http://localhost:3000/#/listing/${listing.id}`;
        });
    }
}

export default MarkerManager;
