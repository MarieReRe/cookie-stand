function Store(minCustomers, maxCustomers, avgCookies) {
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgCookies = avgCookies;
    this.cookies = [];
}

Store.prototype.setCustomers = function () {
    var total = 0;
    for (var i = 0; i < hours.length; i++) {
        var hourly = Math.floor(randomCustomers(this.minCustomers, this.maxCustomers) * this.avgCookies);
        this.cookies.push(`${hours[i]}: ${hourly}`);
        total += hourly;
    }
    this.cookies.push('total: ' + total);
    console.log(this.cookies);
},

//DOM elements to render on the page

Store.prototype.render = function() {
console.log(this.minCustomers);
    
};

var seattle = new Store(23, 65, 6.3);
var tokyo = new Store(3, 24,1.2);
var dubai = new Store(11, 38,3.7);
var paris = new Store(20,38,2.3);
var lima = new Store(2, 16, 4.6);

var storeLocations =[seattle, tokyo, dubai, paris, lima];
 //loop through objects
 for(var i = 0; i < storeLocations.length; i++){
     storeLocations[i].render();
 }
 console.log(storeLocations);
//seattle.render();
















// var