import './cart-icon.styles.scss'
import React from 'react'
import {ReactComponent as Icon} from "../../assets/images/122 shopping-bag.svg";
import {mapDispatchToProps} from "../../redux/cart/cart.maps";
import {connect} from "react-redux";

export class CartIcon extends React.Component {
    render() {
        return (<div className='cart-icon' onClick={() => this.props.triggerVisibility()}>
            <Icon className='shopping-icon'/>
            <span className='item-count'>0</span>
        </div>);
    }
}

export default connect(null, mapDispatchToProps)(CartIcon);