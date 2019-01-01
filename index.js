let store = {drivers: [], passengers: [], trips: []}

let driverId = 0

let passengerId = 0

let tripId = 0

class Driver {
  constructor(name){
    this.id = ++userId;
    this.name = name;
 
    // insert in the user to the store
    store.users.push(this);
  }
}

class Passenger {
  constructor(price, name, driver){
    this.id = ++itemId;
    this.name = name;
    this.price = price;
    if(driver){
      this.setDriver(driver);
    }
 
    // insert in the item to the store
    store.items.push(this);
  }
  setDriver(driver){
    this.driverId = driver.id;
  }
}

class Trip {
  
}