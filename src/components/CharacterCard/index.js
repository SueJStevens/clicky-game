import React from "react";
import "./style.css";

class CharacterCard extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    clicked: false
  };

  render() {
    return(
      <div className="">
        <div className="container p-0">
          <img className="rounded-circle p-1" 
          id={this.props.id} 
          alt={this.props.name} 
          src={this.props.image}
          width="150px" 
          height="150px" 
          onClick={() => this.props.onClick(this.props.id)} />
        </div>
      </div>




    )
  }
};

export default CharacterCard;
