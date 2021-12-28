import React from 'react';

import './menu-item.styles.scss';

import {useNavigate} from 'react-router-dom';
import {connect} from "react-redux";
import {selectShopCategory} from "../../redux/shop/shop.actions";

const MenuItem = ({title, subtitle, imageUrl, size, linkUrl, setCategory}) => {
    const navigate = useNavigate();

    return (
        <div className={`${size} menu-item`} onClick={() => {
            setCategory(title)
            navigate({pathname: linkUrl})
        }}>
            <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}}></div>
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">{subtitle}</span>
            </div>
        </div>);
}
export default connect(null, dispatch => ({
    setCategory: (category) => dispatch(selectShopCategory(category))
}))(MenuItem);