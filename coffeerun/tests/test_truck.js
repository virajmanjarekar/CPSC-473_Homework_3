
var App = global.App;
var Truck = App.Truck;
var DataStore = App.DataStore;
var myTruck = new Truck('ncc-1701', new DataStore());
myTruck.createOrder({
  emailAddress: 'me@goldfinger.com',
  coffee: 'double mocha'
});
myTruck.createOrder({
  emailAddress: 'dr@no.com',
  coffee: 'decaf'
});
myTruck.createOrder({
  emailAddress: 'm@bond.com',
  coffee: 'earl grey'
});
myTruck.printOrders();
myTruck.deliverOrder('dr@no.com');
myTruck.deliverOrder('m@bond.com');
myTruck.printOrders();
