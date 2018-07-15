var Booking = require('../models/Booking.js')

class Employee {
    constructor(payrollNo, name, email, holidayAllowance) {
        this.payrollNo = payrollNo
        this.name = this.capitalize(name)
        this.email = email
        this.holidayAllowance = holidayAllowance
        this.bookings = []
    }

    capitalize(name) {
        var splitName = name.split(" ")
        var upperFirst = splitName[0].charAt(0).toUpperCase() + splitName[0].slice(1)
        var upperSecond = splitName[1].charAt(0).toUpperCase() + splitName[1].slice(1)
        var capitalizedName = upperFirst + " " + upperSecond
        return capitalizedName
    }

    daysRemaining() {
        return this.holidayAllowance - this.daysBooked()
    }

    daysBooked() {
        var daysBooked = 0
        for (var booking of this.bookings) {
            daysBooked += booking.numberOfDays()
        }
        return daysBooked
    }

    daysBookedAndAuthorized() {
        var daysBookedAndAuthorized = 0
        for (var booking of this.bookings) {
            if (booking.isAuthorized_()) {
                daysBookedAndAuthorized += booking.numberOfDays()
            }
        }
        return daysBookedAndAuthorized
    }

    makeBooking(startDate, endDate) {
        var newBooking = new Booking(startDate, endDate)
        this.bookings.push(newBooking)
    }

    futureBookings(authorized=false) {
        var authorizedFutureBookings = []
        var futureBookings = []
        for (var booking of this.bookings) {
            if (booking.startDate > new Date()) {
                futureBookings.push(booking)
                if (booking.isAuthorized_()) {
                    authorizedFutureBookings.push(booking)
                }
            }
        }
        if (authorized == false) {
            return futureBookings
        } else {
            return authorizedFutureBookings
        }
    }

    pastBookings(authorized=false) {
        var authorizedPastBookings = []
        var pastBookings = []
        for (var booking of this.bookings) {
            if (booking.endDate < new Date()) {
                pastBookings.push(booking)
                if (booking.isAuthorized_()) {
                    authorizedPastBookings.push(booking)
                }
            }
        }
        if (authorized == false) {
            return pastBookings
        } else {
            return authorizedPastBookings
        }
    }
}

module.exports = Employee