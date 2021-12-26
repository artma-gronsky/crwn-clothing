import {setIsLoading} from "./common.actions";
import {selectIsLoading} from "./common.selectors";

export const mapStateToProps = (state) => ({
    isLoading: selectIsLoading(state)
})

export const mapDispatchToProps = (dispatch) => ({
    setLoading: val => dispatch(setIsLoading(val))
})
