'use strict';
console.log('Hey these salmon cookies are pretty good.');
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
var seattleLocation = {
    minCustomers: 23,
    maxCustomers: 65,
    avgCookies: 6.3,
    cookies: [],

    setCustomers: function () {
        var total = 0;
        for (var i = 0; i < hours.length; i++) {
            var hourly = randomCustomers(this.minCustomers, this.maxCustomers) * this.avgCookies;
            this.cookies.push(`${hours[i]}: ${hourly}`);
            total += hourly;
        }
        this.cookies.push('total: ' + total);
        console.log(this.cookies);
    },
}
seattleLocation.setCustomers();

var tokyoLocation = {
    minCustomers: 3,
    maxCustomers: 24,
    avgCookies: 1.2,
    cookies: [],

    setCustomers: function () {
        var total = 0;
        for (var i = 0; i < hours.length; i++) {
            var hourly = randomCustomers(this.minCustomers, this.maxCustomers) * this.avgCookies;
            this.cookies.push(`${hours[i]}: ${hourly}`);
            total += hourly;
        }
        this.cookies.push('total: ' + total);
        console.log(this.cookies);
    },
};
tokyoLocation.setCustomers();

var dubaiLocation = {
    minCustomers: 11,
    maxCustomers: 38,
    avgCookies: 3.7,
    cookies: [],

    setCustomers: function () {
        var total = 0;
        for (var i = 0; i < hours.length; i++) {
            var hourly = randomCustomers(this.minCustomers, this.maxCustomers) * this.avgCookies;
            this.cookies.push(`${hours[i]}: ${hourly}`);
            total += hourly;
        }
        this.cookies.push('total: ' + total);
        console.log(this.cookies);
    },
};
dubaiLocation.setCustomers();


var parisLocation = {
    minCustomers: 20,
    maxCustomers: 38,
    avgCookies: 2.3,
    cookies: [],

    setCustomers: function () {
        var total = 0;
        for (var i = 0; i < hours.length; i++) {
            var hourly = randomCustomers(this.minCustomers, this.maxCustomers) * this.avgCookies;
            this.cookies.push(`${hours[i]}: ${hourly}`);
            total += hourly;
        }
        this.cookies.push('total: ' + total);
        console.log(this.cookies);
    },
};
parisLocation.setCustomers();

var limaLocation = {
    minCustomers: 2,
    maxCustomers: 16,
    avgCookies: 4.6,
    cookies: [],

    setCustomers: function () {
        var total = 0;
        for (var i = 0; i < hours.length; i++) {
            var hourly = randomCustomers(this.minCustomers, this.maxCustomers) * this.avgCookies;
            this.cookies.push(`${hours[i]}: ${hourly}`);
            total += hourly;
        }
        this.cookies.push('total: ' + total);
        console.log(this.cookies);
    },
};
limaLocation.setCustomers();

function randomCustomers(min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min);
}



/*function(mincust,maxcust, avgcook){
 for (var i = 0; i < 15, i++) {
            this.cookies.push(randomCustomers(this.minCustomers,this.maxCustomers) * this.avgCookies);
}


use in cookie array. to make drier
*/

//