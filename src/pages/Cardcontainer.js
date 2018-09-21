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
    return value.category[0] === this.props.category;
  }

  _filter = (category) =>{

  const result = this.props.drawers.filter(value => {return value.category[0] === category});
  return result;
  }
      

  _renderCards(category){
   const cardsArray = this.props.match.params.id === "all" || undefined ? this.state.drawers : this._filter(category);
    //const cardsArray = this._filter(category) ;
    const cards = cardsArray.map((cards, index) => {
      return <Card title = {cards.title} info = {cards.info} img = {cards.img} tag = {cards.tag} url = {cards.url} key = {index} />
    });
    return cards
  }

  render(){
      console.log(this.props.match.params.id);
      return(
          <div className = "card-container" id = "card-container" >
          
              {this._renderCards(this.props.match.params.id)}
        

          </div>
      );
}
}

export default Cardcontainer;