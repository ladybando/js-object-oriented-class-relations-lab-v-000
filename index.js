let store = {drivers: [], passengers: [], trips: []};

let driverId = 0;

let passengerId = 0;

let tripId = 0;

class Driver {
  constructor(name){
    this.id = ++driverId;
    this.name = name;
 
    // insert in the user to the store
    store.drivers.push(this);
  }
      passengers() {
        return store.items.filter(
            function(item) {
                return item.userId === this.id;
            }.bind(this)
        );
    }
  
}

class Passenger {
  constructor(price, name, driver){
    this.id = ++passengerId;
    this.name = name;
    this.price = price;
    if(driver){
      this.setDriver(driver);
    }
 
    // insert in the item to the store
    store.passengers.push(this);
  }
  setDriver(driver){
    this.driverId = driver.id;
  }
}

class Trip {
  
}