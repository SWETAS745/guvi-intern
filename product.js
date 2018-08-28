var mongoose     = require('mongoose');
	var Schema       = mongoose.Schema;
	var ProductSchema   = new Schema({
	    name: String,
	    rate: Number,
	    status :Boolean,
	    review: String ,
	});
	module.exports = mongoose.model('Product', ProductSchema);
	// module.exports = mongoose.model('Product', ProductSchema,'optiponally pass schema name ');
