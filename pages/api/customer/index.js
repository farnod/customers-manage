import Customer from "@/models/customer";
import connectDB from "@/utils/connectDB";

export default async function handler(req, res) {
	try {
		await connectDB();
	} catch (err) {
		console.log(err);
		return res
			.status(500)
			.json({ status: "failed", message: "error in connecting DB" });
	}
	if (req.method === "POST") {
		const data = req.body.data;

		if (!data.name || !data.lastName || !data.email)
			return res.status(400).json({
				status: "failed",
				message: "Invalid data",
			});

		try {
			const customer = await Customer.create(data);
			res
				.status(201)
				.json({ status: "success", message: "data created", data: customer  se});
		} catch (err) {
			console.log(err);
			return res
				.status(500)
				.json({ status: "failed", message: "Error in storing in DB" });
		}
	}
}

// // Import the connectDB function from the utils folder
// import connectDB from "@/utils/connectDB";

// // Define an async function called 'handler' with two parameters, a req (request) and res (response)
// export default async function handler(req, res) {
//   // Check if the HTTP method is a POST request
//   if (req.method === "POST") {
// 	// Get the body of the request and assign it to the reqObject variable
// 	const reqObject = await req.body;

// 	// Call the connectDB function to establish a connection to the database
// 	await connectDB();

// 	// Send a JSON response with a 201 status code indicating that the data was successfully created
// 	res.status(201).json({
// 	  status: "success",
// 	  message: "data created",
// 	  container: reqObject,
// 	});

// 	// Log the reqObject to the console for debugging purposes
// 	console.log(reqObject);
//   }
// }
