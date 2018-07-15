class Booking {
    constructor(startDate, endDate) {
        this.startDate = new Date(startDate)
        this.endDate = new Date(endDate)
        this.isAuthorized = false
        this.authorizedBy = null
        this.authorizedOn = null
    }

    numberOfDays() {
        return ((this.endDate - this.startDate) / (1000*60*60*24)+1)
    }

    authorize(name, date = new Date()) {
        this.isAuthorized = true
        this.authorizedBy = name
        this.authorizedOn = new Date(date)
    }

    isAuthorized_() {
        return this.isAuthorized
    }

    authorizedBy_() {
        return this.authorizedBy
    }

    authorizedOn_() {
        return this.authorizedOn
    }
}

module.exports = Booking