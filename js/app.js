'use strict';
console.log('Hey these salmon cookies are pretty good.');
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var seattleLocation = {
    minCustomers: 23,
    maxCustomers: 65,
    avgCookies: 6.3,
    cookies: [],

    setCustomers: function () {
        var total = 0;
        for (var i = 0; i < hours.length; i++) {
            var hourly = Math.floor(randomCustomers(this.minCustomers, this.maxCustomers) * this.avgCookies);
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
            var hourly = Math.floor(randomCustomers(this.minCustomers, this.maxCustomers) * this.avgCookies);
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
            var hourly = Math.floor(randomCustomers(this.minCustomers, this.maxCustomers) * this.avgCookies);
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
            var hourly = Math.floor(randomCustomers(this.minCustomers, this.maxCustomers) * this.avgCookies);
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
            var hourly = Math.floor(randomCustomers(this.minCustomers, this.maxCustomers) * this.avgCookies);
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
// create parent element
var parentElement = document.getElementById('seattle');
//create variable
for(var i = 0; i < seattleLocation.cookies.length; i++){
    var seattleLi = document.createElement('li');
    seattleLi.textContent =seattleLocation.cookies[i];
    parentElement.appendChild(seattleLi);
}

var parentElement = document.getElementById('tokyo');
//create variable
for(var j = 0; j <tokyoLocation.cookies.length; j++){
    var tokyoLi = document.createElement('li');
    tokyoLi.textContent =tokyoLocation.cookies[j];
    parentElement.appendChild(tokyoLi);

}

var parentElement = document.getElementById('dubai');
//create variable
for(var k = 0; k <dubaiLocation.cookies.length; k++){
    var dubaiLi = document.createElement('li');
    dubaiLi.textContent =dubaiLocation.cookies[k];
    parentElement.appendChild(dubaiLi);

}

var parentElement = document.getElementById('paris');
//create variable
for(var l = 0; l < parisLocation.cookies.length; l++){
    var parisLi = document.createElement('li');
    parisLi.textContent =parisLocation.cookies[l];
    parentElement.appendChild(parisLi);

}

var parentElement = document.getElementById('lima');
//create variable
for(var m = 0; m <limaLocation.cookies.length; m++){
    var limaLi = document.createElement('li');
    limaLi.textContent =limaLocation.cookies[m];
    parentElement.appendChild(limaLi);

}









// // Create ul
// var hoursUl = document.createElement('ul');
// article.appendChild(hoursUl);
// //the array
// for (var i = 0; i < hoursSeattle.hours.length; i++) {
//     //Create li
//     console.log(hoursSeattle.hours);
//     var hoursLi = document.createElement('li');
//     // fill in lists
//     hoursLi.textContent = hoursSeattle.hours[i];
//     hoursUl.appendChild(hoursLi);
// }