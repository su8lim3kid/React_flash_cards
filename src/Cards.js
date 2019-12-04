
import React from 'react';
import { Button, Table } from "semantic-ui-react";


const Cards = ({ cards, remove}) => (
  
  
    <Table celled padded>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>front</Table.HeaderCell>
          <Table.HeaderCell>Show Answer</Table.HeaderCell>
          <Table.HeaderCell>Back</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
  
      <Table.Body>
        {
          cards.map( card => ( 
            <Table.Row key={card.id}>
              <Table.Cell>{card.front}</Table.Cell>
              <Table.Cell style={{ width: "10%",}} >
               {/* my flip button to toggle answer is not working yet */}
                <Button color="blue">
                flip
                </Button>
              </Table.Cell>
              <Table.Cell>{card.answer}</Table.Cell>
              <Table.Cell style={{ width: "10%",}} >
              <Button color="red">
                Delete
              </Button>
              </Table.Cell>
             
            </Table.Row> 
            // cards.map(card=> (
            //   <card key={card.id}{...card} remove={remove} />

           
          ))
        }
      </Table.Body>
    </Table>
  );


  export default Cards;