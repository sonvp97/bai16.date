let MyDate = function (day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
    this.getday = function () {
        return this.day;
    }
    this.getmonth = function () {
        return this.month;
    }
    this.getYear = function () {
        return this.year;
    }
    this.setDay = function (day) {
        this.day = day;
    }
    this.setMonth = function (month) {
        this.month = month;
    }
    this.setYear = function (year) {
        this.year = year;
    }
};
let date = new MyDate(2,2,2007);
date.setDay('dd');
date.setMonth('mm');
date.setYear('yyyy')
let day = date.getday();
let month = date.getmonth();
let year = date.getYear();
alert(day + '/' + month + '/' + year);
