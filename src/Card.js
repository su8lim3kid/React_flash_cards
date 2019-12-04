import React from "react";
import { Button, Table, } from "semantic-ui-react";

const Card = ({ front, answer }) => (
  <Table.Row>
    <Table.Cell>{front}</Table.Cell>
    <Table.Cell>{answer}</Table.Cell>
  
  </Table.Row> 
);

export default Card;




