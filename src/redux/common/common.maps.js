import {setIsLoading} from "./common.actions";

export const mapStateToProps = (state) => ({
    isLoading: state.common.isLoading
})

export const mapDispatchToProps = (dispatch) => ({
    setLoading: val => dispatch(setIsLoading(val))
})
