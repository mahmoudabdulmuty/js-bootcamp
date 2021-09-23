const restaurant = {
	name: 'KFC',
	guestCapacity: 100,
	guestCount: 0,
	seatParty(partySize) {
		this.guestCount += partySize;
	},
	removeParty(partySize) {
		this.guestCount -= partySize;
	},
	checkAvailabilty(partySize) {
		const seatsLeft = this.guestCapacity - this.guestCount;
		return seatsLeft >= partySize;
	}
};

restaurant.seatParty(80);
let restaurantStatus = restaurant.checkAvailabilty(25);
console.log(restaurantStatus);

restaurant.removeParty(5);
restaurantStatus = restaurant.checkAvailabilty(25);
console.log(restaurantStatus);
