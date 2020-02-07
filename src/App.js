import React, { Component } from "react";
// import "./App.css";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import CharacterCard from "./components/CharacterCard";
import characters from "./characters.json";

class App extends Component {
	state = {
		characters,
		score: 0,
		highScore: 0,
		clicked: []
	};

	clickChar = id => {
		if (!this.state.clicked.includes(id)) {
			this.setState({
				// clicked: this.state.clicked.push(id),
				clicked: this.state.clicked.concat(id),
				score: this.state.score + 1
			});
			console.log(`score: ${this.state.score}`);
			console.log(`high score: ${this.state.highScore}`);
		} else {
			this.setState({
				clicked: [],
				score: 0
			});
		}
		this.setHighScore();
		this.shuffle();
	};

	// CHANGE THIS
	shuffle() {
		for (let i = 0; i < characters.length; i++) {
			let item = characters[i];
			const randomNum = Math.floor(Math.random() * characters.length);
			characters[i] = characters[randomNum];
			characters[randomNum] = item;
		}
	}

	setHighScore() {
		if (this.state.score >= this.state.highScore) {
			this.setState({ highScore: this.state.score });
		}
	}

	render() {
		return (
			<div>
				<Navbar score={this.state.score} highScore={this.state.highScore} />
				<Jumbotron>Clicky Game!</Jumbotron>
				<Wrapper>
					{this.state.characters.map(char => (
						<CharacterCard
							id={char.id}
							key={char.id}
							name={char.name}
							image={char.image}
							clickChar={this.clickChar}
						/>
					))}
				</Wrapper>
			</div>
		);
	}
}

export default App;
