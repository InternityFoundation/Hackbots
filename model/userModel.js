const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const DB = 'mongodb+srv://admin:mansi24jain@cluster0-lylxh.mongodb.net/test?retryWrites=true&w=majority';
// request
mongoose
	.connect(DB, {
		useNewUrlParser: true,
		useCreateIndex: true,
	})
	.then(_conn => {
		// console.log(conn.connection);
		console.log('Connected to DB1');
	});
const userSchema = new mongoose.Schema({
	// type
	Name: { type: String, required: true, validate: validator.isAlpha },
	userName: { type: String, required: true, validate: validator.isAlphanumeric },
	email: { type: String, required: true, validate: validator.isEmail },
	role: {
		enum: ['admin', 'RestaurantOwner', 'user', 'cook'],
	},
	password: {
		type: String,
		required: true,
		min: 8,
	},
	confirm_password: {
		type: String,
		required: true,
		min: 8,
	},
	resetToken: String,
	expiresIn: Date,
});
userSchema.pre('save', async function() {
	this.password = await bcrypt.hash(this.password, 10);
	this.confirm_password = await bcrypt.hash(this.confirm_password, 10);
});

//to generate random token for forget password
userSchema.methods.createResetToken = function() {
	//randon no. generate
	const cryptoToken = crypto.randomBytes(32).toString('hex');
	//encrypt
	this.resetToken = crypto
		.createHash('sha256')
		.update(cryptoToken)
		.digest('hex');
	//token expired in
	this.expiresIn = Date.now() + 1000 * 60 * 60;
	return cryptoToken;
	
};
const UserModel = mongoose.model('UserModel', userSchema);

module.exports = UserModel;

