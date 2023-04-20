import { useState } from "react";

export default function Home() {
	const [name, setName] = useState("");

	const clickHandler = async () => {
		const res = await fetch("/api/customer", {
			method: "POST",
			body: JSON.stringify({ customerName: name }),
			headers: { "Content-Type": "application/json" },
		});

		const data = await res.json();
		const { customerName } = await data.container;
		console.log(customerName);
	};

	return (
		<>
			<h1>testin for api and connect db</h1>
			<input
				placeholder="your name"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<button onClick={clickHandler}>click</button>
		</>
	);
}

