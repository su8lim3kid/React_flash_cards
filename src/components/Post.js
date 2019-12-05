import React, {Fragment} from "react"
import {Card, Button, } from "semantic-ui-react"
import PostForm from './PostForm'

class Post extends React.Component{
    state = {
        editing: false,
    }

    toggleEdit = () => this.setState({ editing: !this.state.editing, });

    render(){
        return(

            
           
            <Card>
                { this.state.editing ?
                <Fragment>
                    <PostForm title={this.props.title} body={this.props.body} id={this.props.id}
                    edit={this.props.edit} toggleEdit={this.toggleEdit} />
            </Fragment>
            :
            <>
            <Card.Content header={ this.props.title } />
            <Card.Content description={this.props.body } />
            </>
                }
            
           
            
            <Card.Content extra>
            <Button color='teal'>Show </Button>
            <Button color='purple' onClick={this.toggleEdit}>Edit </Button>
            <Button color='red'>Delete </Button>
              
            </Card.Content>
          </Card>
        
        )
            }
}


export default Post