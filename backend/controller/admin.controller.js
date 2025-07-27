const Student = require("../models/student.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// login
async function login(req, res) {
	try {
		const { username, password } = req.body;

		const user = await Student.findOne({ username: username });

		if (!user) {
			return res.status(404).json({ msg: "Student Not Found" });
		} else {
			const valid = await bcrypt.compare(password, user.password);
			if (!valid) {
				return res.status(401).json({ msg: "Invalid Credentials!" });
			} else {
				const token = jwt.sign(
					{ _id: user._id, role: "student" },
					"12345",
					{ expiresIn: "1h" }
				);

				res.json({ token });
			}
		}
	} catch (error) {
		console.log(error);
		return res.status(500).json({ msg: "Error Occurred!", error });
	}
}

//profile
async function profile(req, res) {
	try {
		const ID = req.user;
		const user = await Student.findById(ID);

		if (!user) {
			return res.status(404).json({ msg: "Student Not Found" });
		} else {
			const { password, ...rest } = user._doc;
			res.json({ rest });
		}
	} catch (error) {
		console.log(error);
		return res.status(500).json({ msg: "Error Occurred!", error });
	}
}

module.exports = {
	login,
	register,
	profile,
};
