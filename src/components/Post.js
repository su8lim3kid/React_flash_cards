import React from "react"
import {Card, Button,} from "semantic-ui-react"

class Post extends React.Component{
    render(){
        return(
            <Card>
            <Card.Content header={ this.props.title } />
            <Card.Content description={this.props.body } />
            <Card.Content extra>
            <Button color='teal'>Show </Button>
            <Button color='purple'>Edit </Button>
            <Button color='red'>Delete </Button>
              
            </Card.Content>
          </Card>
        )
    }
}


export default Post