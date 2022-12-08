export const fetchBookings = (guest_id = null) => (
    $.ajax({
        method: "GET",
        url: `/api/bookings/?guest_id=${guest_id}`,
    })
)

export const createBooking = (booking) => (
    $.ajax({
        method: "POST",
        url: `/api/bookings/`,
        data: { booking }
    })
)
