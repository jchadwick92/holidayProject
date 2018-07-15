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
        expect(booking.numberOfDays()).to.eql(5)
    })

    it("returns if the booking is authorized (before being authorised)", function(){
        var result = booking.isAuthorized_()
        expect(result).to.equal(false)
    })

    it("returns who the booking is authorized by (before being authorised)", function(){
        var result = booking.authorizedBy_()
        expect(result).to.equal(null)
    })

    it("returns when the booking was authorized (before being authorised)", function(){
        var result = booking.authorizedOn_()
        expect(result).to.equal(null)
    })

    it("returns if the booking is authorized (after being authorised)", function(){
        booking.authorize("Mr Boss Man")
        var result = booking.isAuthorized_()
        expect(result).to.equal(true)
    })

    it("returns who the booking is authorized by (after being authorised)", function(){
        booking.authorize("Mr Boss Man")
        var result = booking.authorizedBy_()
        expect(result).to.equal("Mr Boss Man")
    })

    it("returns what time the booking was authorized (after being authorised)", function(){
        booking.authorize("Mr Boss Man")
        var date = booking.authorizedOn_()
        var year = date.getFullYear()
        var month = date.getMonth() + 1
        var day = date.getDate()
        expect(year).to.equal(new Date().getFullYear())
        expect(month).to.equal(new Date().getMonth() + 1)
        expect(day).to.equal(new Date().getDate())
    })

    it("returns if the booking is authorized (after being authorised)", function(){
        booking.authorize("Mr Boss Man Again", new Date("2017-07-01"))
        var result = booking.isAuthorized_()
        expect(result).to.equal(true)
    })

    it("returns who the booking is authorized by (after being authorised)", function(){
        booking.authorize("Mr Boss Man Again", new Date("2017-07-01"))
        var result = booking.authorizedBy_()
        expect(result).to.equal("Mr Boss Man Again")
    })

    it("returns what time the booking was authorized (after being authorised)", function(){
        booking.authorize("Mr Boss Man Again", new Date("2017-07-01"))
        var date = booking.authorizedOn_()
        var year = date.getFullYear()
        var month = date.getMonth() + 1
        var day = date.getDate()
        expect(year).to.equal(2017)
        expect(month).to.equal(07)
        expect(day).to.equal(01)
    })



})
