const Student = require("../models/student.model");
const bcrypt = require("bcrypt");
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
				//TODO: implement JWT
				res.json(user);
			}
		}
	} catch (error) {
		console.log(error);
		return res.status(500).json({ msg: "Error Occurred!", error });
	}
}

//register
async function register(req, res) {
	try {
		const { username, password, dob, fullname } = req.body;

		const passwordHash = await bcrypt.hash(password, 10);

		const user = await Student.create({
			username,
			password: passwordHash,
			dob,
			fullname,
		});

		res.json({ msg: "User Created!" });
	} catch (error) {
		console.log(error);
		return res.status(500).json({ msg: "Error Occurred!", error });
	}
}

//profile

module.exports = {
	login,
	register,
};
