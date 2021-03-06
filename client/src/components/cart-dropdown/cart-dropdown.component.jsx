import React from "react";
import './cart-dropdown.styles.scss';
import {CustomButton} from "../custom-button/custom-button.component";

import {useSelector} from "react-redux";
import {CartItem} from "./cart-item/cart-item.component";
import {useNavigate} from "react-router-dom";
import {selectCartItems, selectIsCartHidden} from "../../redux/cart/cart.selectors";

const CartDropdown = () => {
    const isHidden = useSelector(selectIsCartHidden);
    const cartItems = useSelector(selectCartItems)
    const navigate = useNavigate();

    return isHidden ? null : (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {cartItems && cartItems.length ?
                    cartItems.map(item => (
                        <CartItem key={item.id} {...item}/>)) : (
                        <span className='empty-message'>Your cart is empty</span>)}
            </div>
            <CustomButton onClick={() => navigate({pathname: '/checkout'})}>GO TO CHECKOUT </CustomButton>
        </div>);
}

export default CartDropdown;