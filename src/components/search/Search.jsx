import React, { Component } from 'react';
import './Search.css';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {label: 'All', name: 'all'},
            {label: 'Liked', name: 'like'}
        ]
    }
    render() {
        let {term, like, onSearchPost, onSortLike} = this.props;
        let button = this.buttons.map(el => {
            let active = like === el.name;
            let clazz = active ? 'btn-info' : 'btn-outline-secondary'
            return <button key={el.name} name={el.name} className={`btn ${clazz}`} onClick={onSortLike}> {el.label} </button>
        });
        
        return (
            <form 
                className="search-panel d-flex">
                <input 
                    type="text" 
                    placeholder="Search of posts" 
                    className="form-control search-input"
                    onChange={onSearchPost}
                    value={term}/>
                <div className="btn-group">
                    {button}
                </div>
            </form> 
        )
    }
}
