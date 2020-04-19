import React,{Component} from 'react';
import './App.css';
import Header from '../header/Header.jsx';
import Items from '../items/Items.jsx';
import Search from '../search/Search.jsx';
import Add from '../addPost/AddPost.jsx';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {label: 'Hello', important:false, like: false, id:'ded'},
                {label: 'Im Alex', important:false, like: false, id:'rew'},
                {label: 'Nice to meet you', important:false, like: false, id:'dpo'},
            ],
            term: '',
            like: 'all'
        }
        this.maxId = 4;
        this.onDelete = this.onDelete.bind(this);
        this.addPost = this.addPost.bind(this);
        this.onImportant = this.onImportant.bind(this);
        this.onLike = this.onLike.bind(this);
        this.searchPost = this.searchPost.bind(this);
        this.onSearchPost = this.onSearchPost.bind(this);
        this.sortLike = this.sortLike.bind(this);
        this.onSortLike = this.onSortLike.bind(this);
    }
    onDelete(id) {
        this.setState( ({data}) => {
            let arr = data.findIndex( (element) => {
                return id === element.id;  
            });
            let newArr = [...data.slice(0, arr), ...data.slice(arr + 1)];
            return {
                data: newArr
            }
        })  
    }
    addPost(body) {
        let post = {
            label: body,
            important: false,
            id: this.maxId++
        }
        this.setState( ({data}) => {
            let newArr = [...data, post];
            return {
                data: newArr
            }
        })
    }
    onImportant(id) {
        this.setState(({data}) => {
            let index = data.findIndex((el) => {
                return el.id === id;
            })
            let el = data[index];
            let newItem = {...el, important: !el.important};
            let newArr = [...data.slice(0, index), newItem, ...data.slice(index+1)];

            return {
                data: newArr
            }
        })
    }
    onLike(id) {
        this.setState(({data}) => {
            let index = data.findIndex((el) => {
                return el.id === id;
            })
            let el = data[index];
            let newItem = {...el, like: !el.like};
            let newArr = [...data.slice(0, index), newItem, ...data.slice(index+1)];

            return {
                data: newArr
            }
        })
    }
    searchPost(items, term) {
        if(term === '') {
            return items;
        } 
        return items.filter((el) => {
            return el.label.toLowerCase().includes(term)
        })
    }
    onSearchPost(e) {
        this.setState({
            term: e.target.value
        })
    }
    sortLike(item , like) {
        if(like == 'all') {
            return item
        }
        return item.filter( (el)=> {
            return el.like
        })
    }
    onSortLike(e) {
        e.preventDefault();
        this.setState({
            like: e.target.name
        })
    }
    render() {
        let{data} = this.state;
        let posts = data.length;
        let liked = data.filter((el) => {
           return el.like;
        })
        let visible = this.sortLike(this.searchPost(data, this.state.term), this.state.like);
        return (
            <div className="app">
                <Header
                    posts={posts}
                    liked={liked.length}/>
                <Search
                    term={this.state.term}
                    like={this.state.like}
                    onSearchPost={this.onSearchPost}
                    onSortLike={this.onSortLike}/>
                <Items 
                    onDelete={this.onDelete} 
                    posts={visible}
                    onImportant={this.onImportant}
                    onLike={this.onLike}/>
                <Add addPost={this.addPost}/>
            </div>
        )
    }
}

export default App;