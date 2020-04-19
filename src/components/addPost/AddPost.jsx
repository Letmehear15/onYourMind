import React, { Component } from 'react';
import './AddPost.css';

export default class AddPost extends Component {    
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.onChangeText = (e)=> {
            this.setState({
                text: e.target.value
            })
        }
        this.addPost = (e) => {
            e.preventDefault();
            this.props.addPost(this.state.text);
            this.setState({
                text: ''
            })
        }   
    }
    render() {
        return (
            <form 
                className="bottom-panel d-flex"
                onSubmit = {this.addPost}>
                <input 
                    type="text" 
                    placeholder="What are you thinking about?" 
                    className="new-post-label form-control"
                    onChange={this.onChangeText}
                    value={this.state.text}/>
                <button 
                    type="submit" 
                    className="btn btn-outline-secondary" 
                    >Add post</button>
            </form>
        )
    }
}
  
