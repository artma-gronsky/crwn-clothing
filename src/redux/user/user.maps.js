import {setCurrentUser} from "./user.actions";

export const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
})

export const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})