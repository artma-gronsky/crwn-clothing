import {setGlobalLoading} from "./common.actions";
import {selectGlobalLoading} from "./common.selectors";

export const mapStateToProps = (state) => ({
    isLoading: selectGlobalLoading(state)
})

export const mapDispatchToProps = (dispatch) => ({
    setLoading: val => dispatch(setGlobalLoading(val))
})
