const chai = require('chai');
const expect = chai.expect;

var Employee = require('../models/Employee.js')
var Booking = require('../models/Booking.js')

describe("Booking and Employee", function() {

    var employee = new Employee("E123", "joe bloggs", "joe@bloggs.com", 25)
    employee.makeBooking("2018-09-01", "2018-09-05")
    employee.makeBooking("2018-01-01", "2018-01-05")

    it("returns the remaining days of Holiday Allowance after making 2 bookings", function() {
        expect(employee.daysRemaining()).to.eql(15)
    })

    it("returns the number of days booked after making 2 bookings", function() {
        expect(employee.daysBooked()).to.eql(10)
    })

    it("returns the number of days booked and authorized after making 2 bookings", function() {
        expect(employee.daysBookedAndAuthorized()).to.eql(0)
    })

    it("returns an array of all future bookings", function() {
        expect(employee.futureBookings()).to.eql([new Booking("2018-09-01", "2018-09-05")])
    })

    it("returns an array of all past bookings", function() {
        expect(employee.pastBookings()).to.eql([new Booking("2018-01-01", "2018-01-05")])
    })

    it("returns the details of authorized future Bookings", function() {
        employee.futureBookings()[0].authorize("Mr Boss Man")
        ///////////////////////////////
        expect(employee.daysBooked()).to.eql(10) // should be 5
        expect(employee.daysBookedAndAuthorized()).to.eql(5)
        expect(employee.futureBookings(true).length).to.eql(1)
        expect(employee.pastBookings(true).length).to.eql(0)
    })
})