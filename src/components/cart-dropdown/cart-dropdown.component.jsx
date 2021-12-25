import React from "react";
import './cart-dropdown.styles.scss';
import {CustomButton} from "../custom-button/custom-button.component";
import {mapStateToProps} from "../../redux/cart/cart.maps";

import {connect} from "react-redux";

const CartDropdown = (props) => {
    return props.isHidden ? null : (<div className='cart-dropdown'>
        <div className='cart-items'/>
        <CustomButton>GO TO CHECKOUT </CustomButton>
    </div>);
}


export default connect(mapStateToProps)(CartDropdown);