const mongoose = require("mongoose");

module.exports = mongoose.model("Review", {
	title: String,
	movieTitle: String,
	description: String,
	rating: Number
});
