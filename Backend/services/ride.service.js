// const rideModel = require("../models/ride.model");
// const mapService = require("./maps.service");
// const bcrypt = require("bcrypt");
// const crypto = require("crypto");

// module.exports.createRide = async ({
//   user,
//   pickup,
//   destination,
//   vehicleType,
// }) => {
//   if (!user || !pickup || !destination || !vehicleType) {
//     throw new Error("All fields are required");
//   }

//   const fare = await getFare(pickup, destination);

//   const ride = rideModel.create({
//     user,
//     pickup,
//     destination,
//     otp: getOtp(6),
//     fare: fare[vehicleType],
//   });

//   return ride;
// };
