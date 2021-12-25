import {triggerCartVisibility} from "./cart.actions";
import {selectCartItems, selectIsCartHidden} from "./cart.selectors";

export const mapStateToProps = (state) => (
    {
        isHidden: selectIsCartHidden(state),
        cartItems: selectCartItems(state)
    }
);

export const mapDispatchToProps = (dispatch) => (
    {
        triggerVisibility: () => dispatch(triggerCartVisibility())
    }
);