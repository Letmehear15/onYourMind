import React from 'react';
import './Header.css';

const Header = ({posts, liked}) => {
    return (
        <div className="app-header d-flex">
            <h1>Nesterov Alex</h1>
            <h2>{posts} posts, {liked} liked of them</h2>
        </div>
    )
}

export default Header;