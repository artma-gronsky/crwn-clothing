import {createSelector} from "reselect";

const selectCommon = state => state.common;

export const selectIsLoading = createSelector([selectCommon], common => common.isLoading);