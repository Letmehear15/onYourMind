import React from 'react';
import Item from './item/Item.jsx';
import './Items.css';

const Items = ({posts, onDelete, onImportant, onLike}) => {
    let newPost = posts.map((item) => {
        let{ id, ...postsProp } = item;
        return (
            <Item 
                key={id} 
                {...postsProp} 
                id={id} 
                onDelete={onDelete}
                onImportant={onImportant}
                onLike={onLike}
            />
        )
    })
    return (
        <ul className="list-group app-list">
           {newPost} 
        </ul>
    )
}
export default Items;