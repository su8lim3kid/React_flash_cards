import React from "react";
import { Form, } from "semantic-ui-react";

class CardForm extends React.Component {
  state = { front: "", answer: "", };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.add(this.state)
    this.setState({front: "", answer: "",})
    // Call a function to add a contact to state
    // Where should this function be defined???
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, });
  }; 

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input 
            fluid 
            label="Front" 
            placeholder="Front" 
            name="front" 
            value={this.state.front} 
            onChange={this.handleChange}
          />
          <Form.Input 
            fluid 
            label="Answer" 
            placeholder="Answer" 
            name="answer" 
            value={this.state.answer} 
            onChange={this.handleChange}
          />
          <Form.Button color="blue" inverted>Submit</Form.Button>
        </Form.Group>
      </Form>
    )  
  }
}

export default CardForm;
