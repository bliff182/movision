import React from "react";
import "./style.css";

function CharacterCard(props) {
	return (
		<div className="card">
			<div className="img" onClick={() => props.clickChar(props.id)}>
				<img alt={props.name} src={props.image} className="img-thumbnail"></img>
			</div>
		</div>
	);
}

export default CharacterCard;
