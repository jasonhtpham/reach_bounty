import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Games from "./components/Games";

function App() {
	const [games, setGames] = useState([]);
	const [amount, setAmount] = useState(2000);

	const apiKey = "";
	const league = "soccer_australia_aleague";
	const region = "au";

	async function getGames() {
		const { data } = await axios.get(`https://api.the-odds-api.com/v4/sports/${league}/odds/?regions=${region}&markets=h2h&apiKey=${apiKey}`);
		setGames(data);
	}

	useEffect(() => {
		getGames();
	}, []);

	return (
		<div className="App">
			<Header amount={amount} />
			{/* <Games games={games} /> */}
			{games.slice(0, 5).map((games, index) => (
				<Games key={index} games={games} />
			))}
		</div>
	);
}

export default App;
