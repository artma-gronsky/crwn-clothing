import {removeItemFromCart, triggerCartVisibility} from "./cart.actions";
import {selectCartItems, selectIsCartHidden} from "./cart.selectors";
import {createStructuredSelector} from "reselect";

export const mapStateToProps = createStructuredSelector({
    isHidden: selectIsCartHidden,
    cartItems: selectCartItems
})

export const mapDispatchToProps = (dispatch) => (
    {
        triggerVisibility: () => dispatch(triggerCartVisibility()),
        removeItemFromCart: (id) => dispatch(removeItemFromCart(id))
    }
);