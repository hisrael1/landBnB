export const fetchListings = () => (
    $.ajax({
        method: "GET",
        url: '/api/listings',
    })
)


