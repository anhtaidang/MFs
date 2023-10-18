import appAction from "./consts";
import { TreeState } from "./reducer";
import { ReduxAction } from "../type";

export type SetTreeStatePayLoad = { treeState: TreeState };
export const setTreeState = (
  treeState: TreeState
): ReduxAction<SetTreeStatePayLoad> => {
  return {
    type: appAction.SET_TREE_STATE_ACTION,
    payload: { treeState },
  };
};

export const resetTreeState = (): ReduxAction<undefined> => {
  return {
    type: appAction.RESET_TREE_STATE_ACTION,
  };
};
