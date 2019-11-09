const mongoose = require('mongoose');
const validator = require('validator');
const DB = 'mongodb+srv://admin:mansi24jain@cluster0-lylxh.mongodb.net/test?retryWrites=true&w=majority';
// request
mongoose
	.connect(DB, {
		useNewUrlParser: true,
		useCreateIndex: true,
	})
	.then(conn => {
		// console.log(conn.connection);
		console.log('Connected to DB2');
	});
const planSchema = new mongoose.Schema({
	// type
	ct:{type: Number},
	name: { type: String, required: true, validate: validator.isAlpha },
	price: { type: Number, default: 45 },
	description: { type: String, default: 'Cool plan' },
	rate:{type:Number, default: 13},
	description1: {type: String},
	description2: {type: String},
	description3: {type: String},
	description4: {type: String},
	ratingsAverage: {
		type: Number,
		require: true,
		validate: function validator() {
			return this.ratingsAverage < this.totalRating;
		},
		message: 'average rating cant be more than totalRating',
	},
	totalRating: { type: Number, required: true },
});
const PlanModel = mongoose.model('PlanModel', planSchema);
module.exports = PlanModel;
