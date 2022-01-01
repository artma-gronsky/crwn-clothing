import CommonActionsTypes from "./commonActionsTypes";

export const setGlobalLoading = (isLoading) => ({
    type: CommonActionsTypes.SET_GLOBAL_LOADING,
    payload: isLoading
})