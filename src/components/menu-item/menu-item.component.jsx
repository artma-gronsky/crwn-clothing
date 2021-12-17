import React from 'react';

import './menu-item.styles.scss';

import {useNavigate} from 'react-router-dom';

const MenuItem = ({title, subtitle, imageUrl, size, linkUrl}) => {
    const navigate = useNavigate();
    
    return (
        <div className={`${size} menu-item`} onClick={() => navigate({pathname: linkUrl})}>
            <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}}></div>
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">{subtitle}</span>
            </div>
        </div>);
}
export default MenuItem;