import React, { Component } from 'react';
import './Card.css'


class Card extends Component {
  _makeUpperCase = (num) => {
    const base = this.props.tag[num];
    const upper = base.replace(/^\w/, c => c.toUpperCase());
    return upper;
  }

  render() {
    return (
      <div className="card-body">
      <a href = {this.props.url} target="_blank">
          <img className = "card-img" src = {this.props.img} alt = "" width = "100%"></img>
          <div className = "card-title">{this.props.title}</div></a>
          <div className = "card-info">{this.props.info}</div>
          <div className = "card-tag">{this._makeUpperCase(0)}, {this._makeUpperCase(1)}</div>
      </div>
    );
  }
}

export default Card;
