
import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";


class App extends Component {
  
  state = {
    friends, 
    currentScore: 0,
    topScore: 0,
    correctIncorrect: "",
    clicked: [], 
  };
  
  // Random shuffle to shuffle friend cards after click
  shuffleFriend = array => {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

  // handle the click on the image
  handleClick = id => {
    console.log("The image was clicked");
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleScore();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.shuffleFriend();
      }
    };
    // this.setState({ friends: this.shuffleFriend(this.state.friends) })

    // }

    handleScore = () => {
      const newScore = this.state.currentSCore + 1;
      this.setState({
        currentScore: newScore, 
        correctIncorrect: "You guessed correctly!"
      });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
      else if (newScore === 12) {
        this.setState({ correctIncorrect: "You win!" });
      }
      this.shuffleFriend();
    }

    handleReset = () => {
      this.setState({
        currentScore: 0,
        topScore: this.state.topScore, 
        correctIncorrect: "You guess incorrectly!",
        clicked: []
      })
      this.shuffleFriend();
    } 

  
  render() {
    return (
      <div className="App">
        <Wrapper>
        <Nav          
            title="Clicky Game"
            score={this.state.currentScore}
            topScore={this.state.topScore}
            correctIncorrect={this.state.correctIncorrect}
          />
          {this.state.friends.map(friend => (
            <FriendCard
              handleClick={this.handleClick}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
              occupation={friend.occupation}
              location={friend.location}
              handleScore={this.handleScore}
              handleReset={this.handleReset}
              shuffleFriend={this.shuffleFriend}
            />
            ))}
           
        </Wrapper>
      </div>
    );
  }
}

export default App;
