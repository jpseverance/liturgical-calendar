"use strict";
var LiturgicalCalendar = /** @class */ (function () {
    function LiturgicalCalendar(yearOfEaster) {
        this.yearOfEaster = yearOfEaster;
        this.easterDay = new Date(0, 0, 1);
    }
    LiturgicalCalendar.prototype.easterSunday = function () {
        if (this.easterDay.getFullYear() === 0) {
            var y = this.yearOfEaster;
            var a = y % 19;
            var b = Math.floor(y / 100);
            var c = y % 100;
            var d = Math.floor(b / 4);
            var e = b % 4;
            var f = Math.floor((b + 8) / 25);
            var g = Math.floor((b - f + 1) / 3);
            var h = (19 * a + b - d - g + 15) % 30;
            var i = Math.floor(c / 4);
            var k = c % 4;
            var l = (32 + 2 * e + 2 * i - h - k) % 7;
            var m = Math.floor((a + 11 * h + 22 * l) / 451);
            var month = Math.floor((h + l - 7 * m + 114) / 31) - 1;
            var day = ((h + l - 7 * m + 114) % 31) + 1;
            this.easterDay = new Date(y, month, day);
        }
        return this.easterDay;
    };
    return LiturgicalCalendar;
}());