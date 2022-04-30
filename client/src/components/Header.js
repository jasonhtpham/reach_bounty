import React from "react";

function Header({ amount }) {
	return (
		<div className="header--container">
			<h1 className="heading">Sports Betting Application</h1>
			<div className="wager__container--text">
				<p className="wager--text">
					Would you like to take your odds on this weeks games, choose a team you think you will win and place the amount you would like to wager!
				</p>
			</div>
			<div className="wager__container--amount">
				<p className="wager--amount">Amount: ${amount}</p>
			</div>
		</div>
	);
}

export default Header;
