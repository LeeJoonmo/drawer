import React, { Component } from 'react';
import 'shared/App.css'
import {Card} from 'components';
import Fade from 'react-reveal/Fade';


class Cardcontainer extends Component {
  state = {
    drawers: this.props.drawers,
    isId: undefined
  }
  componentWillMount(){

  }
  componentDidMount() {
  }


  _filterFunction = (value) => {
    const tag = value.tag.includes("etc");
    if(tag === true){
      return value;
    }
  }

  _filter = (tag) =>{

  const result = this.props.drawers.filter(value => {
    const tagCheck = value.tag.includes(tag);
    if(tagCheck === true){
      return value;
    }
  });
  return result;
  }
      

  _renderCards(tag){
   const cardsArray = this.props.match.params.id === "all" || undefined ? this.state.drawers : this._filter(tag);
    //const cardsArray = this._filter(category) ;
    const cards = cardsArray.map((cards, index) => {
      return <Card title = {cards.title} info = {cards.info} img = {cards.img} tag = {cards.tag} url = {cards.url} key = {index} />
    });
    return cards
  }

  render(){
      return(
          <div className = "card-container" id = "card-container" >
          
              {this._renderCards(this.props.match.params.id)}
        

          </div>
      );
}
}

export default Cardcontainer;