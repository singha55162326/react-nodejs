import {
    GET_ALL_USERS,
    GET_ALL_USERS_SUCCESS,
    GET_ALL_USERS_FAILED,
    DELETE_BY_ID_USERS,
    DELETE_BY_ID_USERS_FAILED,
    DELETE_BY_ID_USERS_SUCCESS,
    INSRT_NEW_USERS,
    INSRT_NEW_USERS_FAILED,
    INSRT_NEW_USERS_SUCCESS,
    UPDATE_USERS,
    UPDATE_USERS_FAILED,
    UPDATE_USERS_SUCCESS,
  } from "../utils/commonType";
  
  const initialState = {
    error: false,
    success: false,
    actionType: null,
    isLoading: false,
    dataResultUsers: null,
    dataResultUsersDelete: null,
    dataResultUsersNew: null,
    dataResultUsersUpdate: null,
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case GET_ALL_USERS:
        return { ...state, isLoading: false, dataResultUsers: null };
      case GET_ALL_USERS_FAILED:
        return {
          ...state,
          actionType: GET_ALL_USERS_FAILED,
          dataResultUsers: action.data,
          message: action.message,
          status: action.status,
          responseCode: action.responseCode,
        };
      case GET_ALL_USERS_SUCCESS:
        return {
          ...state,
          actionType: GET_ALL_USERS_SUCCESS,
          dataResultUsers: action.data,
          message: action.message,
          status: action.status,
          responseCode: action.responseCode,
        };
      case DELETE_BY_ID_USERS:
        return { ...state, isLoading: false, dataResultUsersDelete: null };
      case DELETE_BY_ID_USERS_FAILED:
        return {
          ...state,
          actionType: DELETE_BY_ID_USERS_FAILED,
          dataResultUsersDelete: action.data,
          message: action.message,
          status: action.status,
          responseCode: action.responseCode,
        };
      case DELETE_BY_ID_USERS_SUCCESS:
        return {
          ...state,
          actionType: DELETE_BY_ID_USERS_SUCCESS,
          dataResultUsersDelete: action.data,
          message: action.message,
          status: action.status,
          responseCode: action.responseCode,
        };
  
      case INSRT_NEW_USERS:
        return { ...state, isLoading: false, dataResultUsersNew: null };
      case INSRT_NEW_USERS_FAILED:
        return {
          ...state,
          actionType: INSRT_NEW_USERS_FAILED,
          dataResultUsersNew: action.data,
          message: action.message,
          status: action.status,
          responseCode: action.responseCode,
        };
      case INSRT_NEW_USERS_SUCCESS:
        return {
          ...state,
          actionType: INSRT_NEW_USERS_SUCCESS,
          dataResultUsersNew: action.data,
          message: action.message,
          status: action.status,
          responseCode: action.responseCode,
        };
  
      case UPDATE_USERS:
        return { ...state, isLoading: false, dataResultUsersUpdate: null };
      case UPDATE_USERS_FAILED:
        return {
          ...state,
          actionType: UPDATE_USERS_FAILED,
          dataResultUsersUpdate: action.data,
          message: action.message,
          status: action.status,
          responseCode: action.responseCode,
        };
      case UPDATE_USERS_SUCCESS:
        return {
          ...state,
          actionType: UPDATE_USERS_SUCCESS,
          dataResultUsersUpdate: action.data,
          message: action.message,
          status: action.status,
          responseCode: action.responseCode,
        };
  
      default:
        return state;
    }
  };
  