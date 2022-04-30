import React, { useEffect } from "react";
import images from "../images/index";

function Games({ games }) {
	console.log(games);
	let foundHome = images.find((home) => home.name === games.home_team).image;
	let foundAway = images.find((away) => away.name === games.away_team).image;
	//console.log(foundAway);

	return (
		<div className="games__container">
			<div className="betting__container">
				<div className="team_a">
					<figure className="image__container">
						<img src={foundHome} alt="" className="image" />
					</figure>
					<p className="team--name">{games.home_team}</p>
					<button className="btn">{games.bookmakers[0].markets[0].outcomes[0].price}</button>
				</div>
				<div className="draw__container">
					<p className="draw">Draw</p>
					<button className="btn">{games.bookmakers[0].markets[0].outcomes[2].price}</button>
				</div>
				<div className="team_b">
					<figure className="image__container">
						<img src={foundAway} alt="" className="image" />
					</figure>
					<p className="team--name">{games.away_team}</p>
					<button className="btn">{games.bookmakers[0].markets[0].outcomes[1].price}</button>
				</div>
			</div>
		</div>
	);
}

export default Games;
