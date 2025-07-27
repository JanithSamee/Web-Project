const Admin = require("../models/admin.model");
const bcrypt = require("bcrypt");

async function addAdmin() {
	const { username, password } = { username: "admin", password: "admin" };

	const passwordHash = await bcrypt.hash(password, 10);

	const user = await Admin.create({
		username,
		password: passwordHash,
	});

	if (!user) {
		console.log("Error");
	} else {
		console.log("Added!");
	}
}

addAdmin();
