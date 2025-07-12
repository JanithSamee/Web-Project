const { default: BASE_URL } = require("./baseurl");

async function StudentLogin(username, password) {
	try {
		const res = await BASE_URL.post("/student/login", {
			username,
			password,
		});

		return res.data;
	} catch (error) {
		return { error: "Error" };
	}
}

export { StudentLogin };
