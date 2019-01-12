import React, { Component } from "react";
import CharacterCard from "./CharacterCard";
import Wrapper from "./Wrapper";
import Nav from "./Nav";
import Header from "./Header";
import characters from "../../src/characters.json";
import Footer from "./Footer";


class Game extends Component {

  //keep track of the state of play
  state = {
    array: characters,
    clicked: [],
    score: 0,
    highScore: 0,
    message: "Don't Click on an Image Twice!"
  }

  /*** Randomly shuffle an array ***/
  shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  }

  /*** things that happen when a character is clicked ***/
  onClick = input => {
    
    //shuffle the array
    this.shuffle(this.state.array)

    //win  Happens when all the characters have been clicked and none clicked twice.
    if (this.state.score === characters.length) {
      return this.setState({
        score: 0,
        clicked:[],
        message: "Winner!  Click to play again!"
      })      
    } //end if

    //loss  Happens when an image is clicked twice
    if (this.state.clicked.includes(input)) {
      this.setState({
        score: 0,
        clicked:[],
        message: "Sorry, Image Clicked Twice!  Click an Image to play again!"
      })  
      //else state of play is still going on, increase score & increase highscore 
    } else {

      //test for highscore
      if (this.state.highScore <= this.state.score) {
        //set highScore = score
        this.setState({
          score: this.state.score + 1,
          highScore: this.state.score + 1,
          message: "Awesome!  Top Dog!"  
        })
      } else {
        //Leave HighScore alone and increment score
        this.setState({
          score: this.state.score + 1,
          message: "Great Choice!"
        })
      }

    }
    this.state.clicked.push(input);
  } //end on click

  render() {
    //if score = length of character array then run onclick event
    if (this.state.score === characters.length) {
      this.onClick();      
    }

    return (
      <div className="container">
        <Nav score={this.state.score} highScore={this.state.highScore} message={this.state.message} />
        <Header score={this.state.score} highScore={this.state.highScore} message={this.state.message} />
        <Wrapper>
          {this.state.array.map(
            input => <CharacterCard
              key={input.id}
              id={input.id}
              image={input.image}
              onClick={this.onClick}
            />
          )}
        </Wrapper>
        <Footer />
      </div>

    )

  };//end render
  

}; //end class 


export default Game;