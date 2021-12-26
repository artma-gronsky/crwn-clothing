import {setCurrentUser} from "./user.actions";
import {selectCurrentUser} from "./user.selectors";

export const mapStateToProps = (state) => ({
    currentUser: selectCurrentUser(state)
})

export const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})