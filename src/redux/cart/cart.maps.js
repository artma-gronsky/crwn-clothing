import {triggerCartVisibility} from "./cart.actions";

export const mapStateToProps = (state) => (
    {
        isHidden: state.cart.isHidden
    }
);

export const mapDispatchToProps = (dispatch) => (
    {
        triggerVisibility: () => dispatch(triggerCartVisibility())
    }
);