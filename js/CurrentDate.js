class CurrentDate {

    constructor() {
        this.dateSection = document.querySelector('.date-current')
        this.hourSection = document.querySelector('.hour-current')
        this.day = "11"
        this.month = "Jul"
        this.monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        this.year = "2023"
        this.hour = "11"
        this.minute = "29"
        this.second = "00"
        this.refreshDate()
        this.refreshHour()
        setInterval(() => {
            this.refreshDate();
        }, 60000)
        setInterval(() => {
            this.refreshHour()
        }, 1000)
    }

    refreshDate() {
        let date = new Date()
        let currentDay = date.getDate()
        this.month = this.monthArray[date.getMonth()]
        this.year = date.getFullYear()
        if (currentDay < 10) {
            this.day = "0" + currentDay
        } else {
            this.day = currentDay
        }
        this.dateSection.innerHTML = this.month + " " + this.day
    }

    refreshHour() {
        let date = new Date()
        let hourCurrent = date.getHours()
        let minuteCurrent = date.getMinutes()
        let secondCurrent= date.getSeconds()

        if (hourCurrent < 10) {
            this.hour = "0" + hourCurrent
        } else {
            this.hour = hourCurrent
        }

        if (minuteCurrent < 10) {
            this.minute = "0" + minuteCurrent
        } else {
            this.minute = minuteCurrent
        }

        if (secondCurrent < 10) {
            this.second = "0" + secondCurrent
        } else {
            this.second = secondCurrent
        }

        this.hourSection.innerHTML = this.hour + ":" + this.minute + ":" + this.second
    }
}