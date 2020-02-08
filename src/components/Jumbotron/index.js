import React from "react";
import "./style.css";

function Jumbotron(props) {
	return (
		<div className="jumbotron jumbotron-fluid">
			<div className="container">
				<h1 className="display-4">{props.children}</h1>
				<p className="lead">
					Click the characters to earn points, but don't click on any more than
					once!
				</p>
			</div>
		</div>
	);
}

export default Jumbotron;
