import React, { Component }from 'react';
import './App.css';
import Card from './Card';
import Cards from './Cards'
import CardForm from './CardForm'
import { Container, Header,} from "semantic-ui-react"; 

class App extends Component {
state ={
  cards:[],showAnswer: true,

}
getId=() =>{
  return ((1 + Math.floor())* 10000)
}

addCard = (cardData) =>{
  let card = {id: this.getId(),...cardData}
  this.setState({cards: [card,...this.state.cards],})
}
// under construction trying to figure out how to hide answer //
// toggleAnswer= () => this.setState({showAnswer: !this.state.showAnswer,})

removeCard= (id) =>{
  const cards = this.state.cards.filter( card =>{
    if (cards.id !== id)
    return card
  })
  this.setState({cards: [...cards],})
}

  render(){
    return(
      <div>
        
          <Container style={{ paddingTop: "25px"}}>
        <Header as="h1">React Flash Cards</Header>
        <hr />
        <br />
      
      <br />
      <CardForm add={this.addCard}/>
      <hr />
      <br />
      </Container>
      
        
        <Cards cards={this.state.cards} remove={this.removecard} />
        
        
        

    
        
      </div>
    )

  }

}

export default App;
