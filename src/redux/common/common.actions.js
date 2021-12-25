import CommonActionsTypes from "./commonActionsTypes";

export const setIsLoading = (isLoading) => ({
    type: CommonActionsTypes.SET_IS_LOADING,
    payload: isLoading
})