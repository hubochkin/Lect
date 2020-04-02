import * as types from "../actions";

const initialState = {
    attempts: 3,
};
export default function(state = initialState, action) {
  const response = action.response;
  switch (action.type) {
    case types.REGISTER_USER: {
      return state;
    }
    case types.REGISTER_USER_SUCCESS: {
      return { ...state, response };
    }

    case types.REGISTER_USER_ERROR: {
      return { ...state, response };
    }
    default: {
      return state;
    }
  }
}
