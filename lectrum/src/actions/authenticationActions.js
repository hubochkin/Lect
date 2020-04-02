import * as types from './index';

export const registerUserAction = (register) => {
  return {
    type: types.REGISTER_USER,
    register
  }
};

export const loginUserAction = (user) => {
  return {
    type: types.LOGIN_USER,
    user
  }
};

