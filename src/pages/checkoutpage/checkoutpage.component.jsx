import React from "react";

import './checkoutpage.styles.scss';
import {connect} from "react-redux";
import {hideCart} from "../../redux/cart/cart.actions";

class CheckoutPage extends React.Component {
    componentDidMount() {
        this.props.hideCard();
    }

    render() {
        return (<div className='checkout'>Checkout Page</div>);
    }
}

export default connect(null, (dispatch) => ({
    hideCard: () => dispatch(hideCart())
}))(CheckoutPage);

