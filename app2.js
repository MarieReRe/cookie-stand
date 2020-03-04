'use strict';
console.log('Hey I work');

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
function randomCustomers(min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min);
}
function Store(storeName, minCustomers, maxCustomers, avgCookies) {
    this.storeName = storeName;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgCookies = avgCookies;
    this.cookies = [];
}

Store.prototype.setCustomers = function () {
    var total = 0;
    for (var i = 0; i < hours.length; i++) {
        var hourly = Math.floor(randomCustomers(this.minCustomers, this.maxCustomers) * this.avgCookies);
        this.cookies.push(hourly);
        total += hourly;
    }
    this.cookies.push(total);
    console.log(this.cookies);
}

    //DOM elements to render on the page
    //adding the hours to the top of the table

//create table
var storeTable = document.getElementById('cookie-data');
var tableRow = document.createElement('tr');
var firstCell = document.createElement('td');
firstCell.textContent ='     ';
tableRow.appendChild(firstCell);
for(var i = 0; i < hours.length; i++) {
    var hoursCell = document.createElement('td');
    hoursCell.textContent = hours[i];
    tableRow.appendChild(hoursCell);
}
storeTable.appendChild(tableRow);

Store.prototype.render = function () {
    console.log(this.minCustomers);
   
    var storeRow = document.createElement('tr');
    var nameCell = document.createElement('td');
    nameCell.textContent = this.storeName;
    storeRow.appendChild(nameCell);

    for (var i = 0; i < this.cookies.length; i++) {
        var cookieCell = document.createElement('td');
        cookieCell.textContent = this.cookies[i];
        storeRow.appendChild(cookieCell);
    }


    storeTable.appendChild(storeRow);


};

var seattle = new Store('seattle', 23, 65, 6.3);
var tokyo = new Store('tokyo', 3, 24, 1.2);
var dubai = new Store('dubai', 11, 38, 3.7);
var paris = new Store('paris', 20, 38, 2.3);
var lima = new Store('lima', 2, 16, 4.6);

var storeLocations = [seattle, tokyo, dubai, paris, lima];
// //adding the hours to the top of the table
// for (var i = 0; i < hours.length; i++) {
//     var hoursCell = document.createElement('tr');
//     hoursCell.textContent = hours[i];
//     storeRow.appendChild(hoursCell);
// }
//loop through objects
for (var i = 0; i < storeLocations.length; i++) {
    storeLocations[i].setCustomers();
    storeLocations[i].render();
}

//create the footer
var tableFooter = document.createElement('tr');

//create first row
var totalRow = document.createElement('td');
totalRow.textContent = 'Total';
tableFooter.appendChild(totalRow);

//hourly total disaster
var hourTotal = 0;
for(var i = 0; i < hours.length; i++){
    hourTotal = 0;
for(var x = 0; x <storeLocations.length; x++){
hourTotal += storeLocations[x].cookies[i];
}
var tableData = document.createElement('td');
tableData.textContent = hourTotal;
tableFooter.appendChild(tableData);
}

//append table footer to table
storeTable.appendChild(tableFooter);


console.log(storeLocations);

















