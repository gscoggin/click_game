import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import Nav from './components/Nav';

class App extends Component {
  
  state = {
    friends
  };
  
  shuffleFriend = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  handleClick = id => {
    console.log("The image was clicked");
    
    this.setState({ friends: this.shuffleFriend(this.state.friends) })

    }

  removeFriend = id => {
    const friends = this.state.friends.filter(friend => friend.id !== id);
  
    this.setState({ friends });

  };
  
  render() {
    return (
      <div className="App">
        <Nav></Nav>
        <Wrapper>
          <Title>Friends List</Title>
          {this.state.friends.map(friend => (
            <FriendCard
              handleClick={this.handleClick}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
              occupation={friend.occupation}
              location={friend.location}
            />
            ))}
           
        </Wrapper>
      </div>
    );
  }
}

export default App;
