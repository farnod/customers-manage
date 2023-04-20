// Import the connectDB function from the utils folder
import connectDB from "@/utils/connectDB";

// Define an async function called 'handler' with two parameters, a req (request) and res (response)
export default async function handler(req, res) {
  // Check if the HTTP method is a POST request
  if (req.method === "POST") {
	// Get the body of the request and assign it to the reqObject variable
	const reqObject = await req.body;

	// Call the connectDB function to establish a connection to the database
	await connectDB();

	// Send a JSON response with a 201 status code indicating that the data was successfully created
	res.status(201).json({
	  status: "success",
	  message: "data created",
	  container: reqObject,
	});

	// Log the reqObject to the console for debugging purposes
	console.log(reqObject);
  }
}

