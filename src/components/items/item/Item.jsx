import React, {Component} from 'react';
import './Item.css';

class Items extends Component {
    render() {
        const {label, onDelete, id, onImportant, onLike} = this.props;
        let classNames = 'app-list-item d-flex justify-content-between list-group-item ';
        if(this.props.important) classNames += 'important ';
        if(this.props.like) classNames += 'like';
        
        return (
            <li className={classNames}>
                <span className='app-list-item-label' onClick={()=> onLike(id)}> {label} </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button 
                        className="btn-star btn-sm"
                        onClick={() => onImportant(id)}>
                        <i className="fa fa-star"></i>
                    </button>
                    <button 
                        className="btn-trash btn-sm"
                        onClick={()=> onDelete(id)}>
                        <i className="fa fa-trash"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </li>
        )
    } 
}

export default Items;

