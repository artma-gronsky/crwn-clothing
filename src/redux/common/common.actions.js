import CommonTypes from "./common.types";

export const setIsLoading = (isLoading) => ({
    type: CommonTypes.SET_IS_LOADING,
    payload: isLoading
})