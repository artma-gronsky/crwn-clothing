import React from "react";
import './cart-dropdown.styles.scss';
import {CustomButton} from "../custom-button/custom-button.component";
import {mapStateToProps} from "../../redux/cart/cart.maps";

import {connect} from "react-redux";
import {CartItem} from "./cart-item/cart-item.component";
import {useNavigate} from "react-router-dom";

const CartDropdown = ({cartItems, isHidden}) => {
    const navigate = useNavigate();

    return isHidden ? null : (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {cartItems && cartItems.length ?
                    cartItems.map(item => (<CartItem key={item.id} {...item} />)) : (
                        <span className='empty-message'>Your cart is empty</span>)}
            </div>
            <CustomButton onClick={() => navigate({pathname: '/checkout'})}>GO TO CHECKOUT </CustomButton>
        </div>);
}


export default connect(mapStateToProps)(CartDropdown);