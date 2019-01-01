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

	trips () {
		return store.trips.filter(
			function(trip) {
				return trip.driverId === this.id;
			}.bind(this)
		)
	}

	passengers () {
		return this.trips().map(
			function(trip) {
				return trip.passenger();
			}
		)
	}
}

class Passenger {
  constructor(name){
    this.id = ++passengerId;
    this.name = name;

 
    // insert in the item to the store
    store.passengers.push(this);
  }
}

class Trip {
    constructor(name){
    this.id = ++tripId;
    this.name = name;
 
    // insert in the item to the store
    store.trips.push(this);
  }
  
      passenger() {
        return store.passengers.find(
            function(passenger) {
                return passenger.id === this.passsengerId;
            }.bind(this)
        );
    }
}