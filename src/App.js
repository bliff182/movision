import React, { Component } from "react";
// import "./App.css";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import CharacterCard from "./components/CharacterCard";
import characters from "./characters.json";

class App extends Component {
	state = {
		characters
	};

	render() {
		return (
			<Wrapper>
				<Jumbotron>Clicky Game!</Jumbotron>
				{this.state.characters.map(char => (
					<CharacterCard
						id={char.id}
						key={char.id}
						name={char.name}
						image={char.image}
					/>
				))}
			</Wrapper>
		);
	}
}

export default App;
