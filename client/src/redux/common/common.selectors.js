import {createSelector} from "reselect";

const selectCommon = state => state.common;

export const selectGlobalLoading = createSelector([selectCommon], common => common.isLoading);