const chai = require('chai');
const expect = chai.expect;

var Booking = require('../models/Booking.js')

describe("Booking", function() {

    var booking = new Booking("2018-09-01", "2018-09-05")

    it("instantiates properly", function() {
        expect(booking.startDate).to.eql(new Date("2018-09-01"))
        expect(booking.endDate).to.eql(new Date("2018-09-05"))
    })

    it("returns the number of days between the start and end date", function(){
        var result = booking.numberOfDays()
        expect(result).to.eql(5)
    })
})
