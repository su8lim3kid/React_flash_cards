import React from "react"
import Post from "./Post"
import {Header,} from "semantic-ui-react"

class Deck extends React.Component{
    state={
        posts:[
            {id:1 , title:"question", body:"answer"},
            {id:2 , title:"test", body:"answertest"}

        ]
    }

renderPosts = () => {
    return this.state.posts.map( post => <Post key={post.id} {...post} />)
}

render() { 
    return (
        <div>
            <Header as="h1">Deck</Header>
            {this.renderPosts()}
        </div>

    )
}
}


export default Deck;