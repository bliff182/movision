import React from "react";
import "./style.css";

function CharacterCard(props) {
	return (
		<div className="imageCard">
			{/* probably need to add props.function for onClick event */}
			{/* <img alt={props.name} src={props.image} /> */}
			<img src={props.image} alt={props.name} className="img-thumbnail"></img>
		</div>
	);
}

export default CharacterCard;
