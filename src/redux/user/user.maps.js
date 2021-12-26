import {setCurrentUser} from "./user.actions";

export const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})