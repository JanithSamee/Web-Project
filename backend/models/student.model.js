const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
	{
		fullname: {
			type: String,
			required: true,
			trim: true,
		},
		username: {
			type: String,
			required: true,
			unique: true,
			trim: true,
		},
		dob: {
			type: Date,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Student", studentSchema);
