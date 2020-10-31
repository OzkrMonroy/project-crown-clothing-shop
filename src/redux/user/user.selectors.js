import { createSelector } from "reselect";

const selectUser = state => state.user;

export const selectorCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
)