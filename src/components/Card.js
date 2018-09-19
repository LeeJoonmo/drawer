import React, { Component } from 'react';
import './Card.css'


class Card extends Component {
  render() {
    return (
      <div className="card-body">
      <a href = {this.props.url} target="_blank">
          <img className = "card-img" src = {this.props.img} alt = "" width = "100%"></img>
          <div className = "card-title">{this.props.title}</div></a>
          <div className = "card-info">{this.props.info}</div>
          <div className = "card-tag">{this.props.tag[0]}, {this.props.tag[1]}</div>
      </div>
    );
  }
}

export default Card;
