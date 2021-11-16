import { createSelector } from "reselect";

const selectDirectory = (state) => state.directory;

export const DataFoodSelector = createSelector(
  [selectDirectory],
  (directory) => directory.section
);
