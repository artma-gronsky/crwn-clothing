import React from "react";

import './checkoutpage.styles.scss';
import {connect} from "react-redux";
import {hideCart, removeItemFromCart} from "../../redux/cart/cart.actions";
import {createStructuredSelector} from "reselect";
import {selectCartItems, selectCartTotal} from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

class CheckoutPage extends React.Component {
    componentDidMount() {
        this.props.hideCard();
    }

    render() {
        const {cartItems, total, removeItemFn} = this.props;
        return (<div className='checkout-page'>
            <div className='checkout-header '>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map(item => {
                return (<CheckoutItem removeFn={removeItemFn} key={item.id} cartItem={item}/>);
            })}
            <div className='total'><span>TOTAL: ${total}</span></div>
        </div>);
    }
}

export default connect(createStructuredSelector(
    {
        cartItems: selectCartItems,
        total: selectCartTotal
    }
), (dispatch) => (
    {
        hideCard: () => dispatch(hideCart()),
        removeItemFn: (id) => dispatch(removeItemFromCart(id))
    }
))(CheckoutPage);

