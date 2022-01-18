import {createSelector} from "reselect";

const getDirectory = state => state.directory;

export const getDirectorySections = createSelector([getDirectory], directory => directory.sections);