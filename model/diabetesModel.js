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
		console.log('Connected to DB3');
	});
const diabetesSchema = new mongoose.Schema({
	// type
	own: { type: Boolean, required: true },
	age: { type: Number, required: true },
	siblings: { type: Number, required: true },
	noofsib: { type: Number, required: true },
	patno: { type: Number, required: true },
	patnodia: { type: Number, required: true },
	matno: { type: Number, required: true },
	matnodia: { type: Number, required: true },
});
const DiabetesModel = mongoose.model('DiabetesModel', diabetesSchema);
module.exports = DiabetesModel;
