const mongoose = require("mongoose");

const ModuleSchema = new mongoose.Schema({
	title: { type: String, required: true },
	description: { type: String, required: true },
});

const CourseSchema = new mongoose.Schema(
	{
		title: { type: String, required: true },
		subtitle: { type: String, required: true },
		description: { type: String, required: true },
		courseName: { type: String, required: true },
		modules: { type: [ModuleSchema], required: false },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Course", CourseSchema);
