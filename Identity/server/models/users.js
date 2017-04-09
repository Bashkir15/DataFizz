import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const UserSchema = new mongoose.Schema({
	created: {
		type: Date,
		default: Date.now
	},

	name: {
		type: String,
		required: true
	},

	username: {
		type: String,
		required: true,
		match: [/\w+$/, 'Please enter only alphanumeric characters']
	},

	email: {
		type: String,
		required: true,
		unique: true
	},

	password: {
		type: String,
		required: true
	},

	picture: {
		type: String
	},

	roles: {
		type: Array,
		default: ['authenticated']
	},

	loggedIn: {
		type: Boolean,
		default: false
	},

	loginAttempts: {
		type: Number,
		default: 0,
		required: true
	},

	lockUntil: {
		type: Number
	},

	limitReached: {
		type: Number,
		required: true,
		default: 0
	},

	secureLock: {
		type: Boolean,
		default: false
	},

	token: String,
	resetPasswordToken: String,
	resetPasswordExpires: Date
});

UserSchema.virtual('isLocked').get(function() {
	let self = this;

	return !!(self.lockUntil && self.lockUntil > Date.now());
})

UserSchema.pre('save', function(next) {
	let user = this;

	if (!user.isModified('password')) {
		return next();
	}

	bcrypt.genSalt(10, (err, salt) => {
		if (err) {
			return next(err);
		}

		bcrypt.hash(user.password, salt, (err, hash) => {
			if (err) {
				return next(err);
			}

			user.password = hash;
			next();
		});
	});
});

UserSchema.methods = {
	hasRole: (role) => {
		this.roles.includes('admin') || this.roles.includes(role);
	},

	comparePassword: function(candidatePassword, cb) {
		bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
			if (err) {
				return cb(err);
			}

			cb(null, isMatch);
		});
	},

	incorrectLoginAttempts: function(cb) {
		if (this.lockUntil && this.lockUntil < Date.now()) {
			return this.update({
				$set: {
					loginAttempts: 1,
					limitReached,
				},

				$unset: {
					lockUntil: 1,
				},
			}, cb);
		}

		let updates = {
			$inc: { loginAttempts: 1 }
		};

		if (this.loginAttempts + 1 > 5 && !this.isLocked) {
			updates.$set = {
				lockUntil: Date.now() + 2 * 60 * 60 * 1000,
				limitReached: 1,
			};
		}

		if (this.loginAttempts + 1 > 5 && this.limitReached === 1 && !this.isLocked) {
			updates.$set = {
				lockUntil: Date.now() + 4 * 60 * 60 * 1000,
				limitReached: 2,
			};
		}

		if (this.loginAttempts + 1 > 3 && this.limitReached === 2 && !this.isLocked) {
			updates.$set = {
				lockUntil: Date.now() + 8 * 60 * 60 * 1000,
				limitReached: 3,
			};
		}

		if (this.loginAttempts + 1 > 3 && this.limitReached == 3 && !this.isLocked) {
			updates.$set = {
				lockUntil: Date.now() + 10000 * 60 * 60 * 1000,
				limitReached: 4,
				secureLock: true,
			};
		}

		return this.update(updates, cb);
	},

	toJSON: function() {
		let obj = this.toObject();
		obj.password = '';
		return obj;
	}
};

const User = mongoose.model('User', UserSchema);

module.exports = {
	User: User
};

