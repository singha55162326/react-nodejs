import {
  LOGIN,
  LOGIN_FAILED,
  LOGIN_SUCCESS
} from "../utils/commonType";

const initialState = {
  userInfo: null,
  error: false,
  success: false,
  actionType: null,
  responseCode: null,
  description: null,
  isLoading: false,
  responseDescription: null,
  accessToken: null,
  setlogin: false,
  dataLogout: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, isLoading: false, userInfo: null };
    case LOGIN_FAILED:
      return {
        ...state,
        actionType: LOGIN_FAILED,
        error: true,
        userInfo: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        actionType: LOGIN_SUCCESS,
        success: true,
        userInfo: action.userInfo,
        error: false,
      };
    default:
      return state;
  }
};
