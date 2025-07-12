const mongoose = require("mongoose");

const MONGODB_URL = process.env.MONGODB_URL;

const clientOptions = {
	serverApi: {
		version: "1",
		strict: true,
		deprecationErrors: true,
		autoIndex: true,
	},
};

async function run() {
	try {
		// Create a Mongoose client with a MongoClientOptions object to set the Stable API version
		await mongoose.connect(MONGODB_URL, clientOptions);
		await mongoose.connection.db.admin().command({ ping: 1 });
		console.log(
			"Pinged your deployment. You successfully connected to MongoDB!"
		);
	} catch (error) {
		// Ensures that the client will close when you finish/error
		console.log(error);
		await mongoose.disconnect();
	}
}
run().catch(console.dir);
