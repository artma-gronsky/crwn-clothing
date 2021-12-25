import {triggerCartVisibility} from "./cart.actions";

export const mapStateToProps = (state) => (
    {
        isHidden: state.cart.isHidden,
        cartItems: state.cart.cartItems
    }
);

export const mapDispatchToProps = (dispatch) => (
    {
        triggerVisibility: () => dispatch(triggerCartVisibility())
    }
);