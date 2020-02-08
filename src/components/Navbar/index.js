import React from "react";
import "./style.css";

function Navbar(props) {
	return (
		<nav className="navbar navbar-dark bg-dark">
			<span className="navbar-brand mb-0 h1">Clicky Game!</span>
			<span className="navbar-brand mb-0 h1">Click an image to begin!</span>
			{/* prettier-ignore */}
			<span className="navbar-brand mb-0 h1" id="scoreboard">
				Current Score: {props.score} <span>|</span> High Score: {props.highScore}
			</span>
		</nav>
	);
}

export default Navbar;
