class Booking {
    constructor(startDate, endDate) {
        this.startDate = new Date(startDate)
        this.endDate = new Date(endDate)
    }

    numberOfDays() {
        return ((this.endDate - this.startDate) / (1000*60*60*24)+1)
    }
}

module.exports = Booking