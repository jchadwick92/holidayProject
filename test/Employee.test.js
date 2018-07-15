const chai = require('chai');
const expect = chai.expect;

var Employee = require('../models/Employee.js')

describe("Employee", function() {

    var employee = new Employee("E123", "joe bloggs", "joe@bloggs.com", 25)

    it("instantiates properly", function() {
        expect(employee.payrollNo).to.equal("E123")
        expect(employee.name).to.equal("Joe Bloggs")
        expect(employee.email).to.equal("joe@bloggs.com")
        expect(employee.bookings).to.eql([])
        expect(employee.holidayAllowance).to.eql(25)
    })

    it("returns the remaining days of Holiday Allowance", function() {
        expect(employee.daysRemaining()).to.eql(25)
    })

    it("returns the number of days booked", function() {
        expect(employee.daysBooked()).to.eql(0)
    })

    it("returns the number of days booked and authorized", function() {
        expect(employee.daysBookedAndAuthorized()).to.eql(0)
    })

})