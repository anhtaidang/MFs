import userAction from "./consts";
import { UserInfo } from "./reducer";
import { ReduxAction } from "../type";

export type LoginPayLoad = { userInfo: UserInfo };
export const logIn = (userInfo: UserInfo): ReduxAction<LoginPayLoad> => {
  return {
    type: userAction.LOGIN_ACTION,
    payload: { userInfo },
  };
};

export const logOut = (): ReduxAction<undefined> => {
  return {
    type: userAction.LOGOUT_ACTION,
  };
};
