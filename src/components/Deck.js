import React from "react"
import Post from "./Post"
import {Header,} from "semantic-ui-react"
import PostForm from "./PostForm"

class Deck extends React.Component{
    state={
        posts:[
            {id:1 , title:"Question", body:"Answer"},
            {id:2 , title:"Question 2", body:"Answer 2"}

        ]
    }
    getId = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1)
    }

    addPost =(postData) =>{
        const {posts,} = this.state
        const post = {id: this.getId(), ...postData}
        this.setState({posts: [post, ...posts], }) 
    }

renderPosts = () => {
    return this.state.posts.map( post => <Post key={post.id} edit={this.editPost} {...post} />)
}

editPost = (postData) => {
    const posts = this.state.posts.map( post => {
      if (post.id === postData.id)
        return postData;
      return post
    });
    this.setState({ posts, });
  }

  renderPosts = () => {
    return this.state.posts.map( post => <Post key={post.id} {...post} edit={this.editPost} />)
  };

render() { 
    return (
        <div>
            <Header as="h1">Deck</Header>
            <PostForm add={this.addPost}toggleEdit={this.toggleEdit} />
            {this.renderPosts()}
        </div>

    )
}
}


export default Deck;