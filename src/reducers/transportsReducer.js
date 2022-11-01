import {
    GET_ALL_TRANSPORTS,
    GET_ALL_TRANSPORTS_SUCCESS,
    GET_ALL_TRANSPORTS_FAILED,
    DELETE_BY_ID_TRANSPORTS,
    DELETE_BY_ID_TRANSPORTS_FAILED,
    DELETE_BY_ID_TRANSPORTS_SUCCESS,
    INSRT_NEW_TRANSPORTS,
    INSRT_NEW_TRANSPORTS_FAILED,
    INSRT_NEW_TRANSPORTS_SUCCESS,
    UPDATE_TRANSPORTS,
    UPDATE_TRANSPORTS_FAILED,
    UPDATE_TRANSPORTS_SUCCESS,
    GET_ALL_TRANSPORTS_BY_ID,
    GET_ALL_TRANSPORTS_BY_ID_SUCCESS,
    GET_ALL_TRANSPORTS_BY_ID_FAILED
  } from "../utils/commonType";
  
  const initialState = {
    error: false,
    success: false,
    actionType: null,
    isLoading: false,
    dataResultTransports: null,
    dataResultTransportsDelete: null,
    dataResultTransportsNew: null,
    dataResultTransportsUpdate: null,
    dataResultTransportsById: null,
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case GET_ALL_TRANSPORTS:
        return { ...state, isLoading: false, dataResultTransports: null };
      case GET_ALL_TRANSPORTS_FAILED:
        return {
          ...state,
          actionType: GET_ALL_TRANSPORTS_FAILED,
          dataResultTransports: action.data,
          message: action.message,
          status: action.status,
          responseCode: action.responseCode,
        };
      case GET_ALL_TRANSPORTS_SUCCESS:
        return {
          ...state,
          actionType: GET_ALL_TRANSPORTS_SUCCESS,
          dataResultTransports: action.data,
          message: action.message,
          status: action.status,
          responseCode: action.responseCode,
        };
      case DELETE_BY_ID_TRANSPORTS:
        return { ...state, isLoading: false, dataResultTransportsDelete: null };
      case DELETE_BY_ID_TRANSPORTS_FAILED:
        return {
          ...state,
          actionType: DELETE_BY_ID_TRANSPORTS_FAILED,
          dataResultTransportsDelete: action.data,
          message: action.message,
          status: action.status,
          responseCode: action.responseCode,
        };
      case DELETE_BY_ID_TRANSPORTS_SUCCESS:
        return {
          ...state,
          actionType: DELETE_BY_ID_TRANSPORTS_SUCCESS,
          dataResultTransportsDelete: action.data,
          message: action.message,
          status: action.status,
          responseCode: action.responseCode,
        };
  
      case INSRT_NEW_TRANSPORTS:
        return { ...state, isLoading: false, dataResultTransportsNew: null };
      case INSRT_NEW_TRANSPORTS_FAILED:
        return {
          ...state,
          actionType: INSRT_NEW_TRANSPORTS_FAILED,
          dataResultTransportsNew: action.data,
          message: action.message,
          status: action.status,
          responseCode: action.responseCode,
        };
      case INSRT_NEW_TRANSPORTS_SUCCESS:
        return {
          ...state,
          actionType: INSRT_NEW_TRANSPORTS_SUCCESS,
          dataResultTransportsNew: action.data,
          message: action.message,
          status: action.status,
          responseCode: action.responseCode,
        };
  
      case UPDATE_TRANSPORTS:
        return { ...state, isLoading: false, dataResultTransportsUpdate: null };
      case UPDATE_TRANSPORTS_FAILED:
        return {
          ...state,
          actionType: UPDATE_TRANSPORTS_FAILED,
          dataResultTransportsUpdate: action.data,
          message: action.message,
          status: action.status,
          responseCode: action.responseCode,
        };
      case UPDATE_TRANSPORTS_SUCCESS:
        return {
          ...state,
          actionType: UPDATE_TRANSPORTS_SUCCESS,
          dataResultTransportsUpdate: action.data,
          message: action.message,
          status: action.status,
          responseCode: action.responseCode,
        };

        case GET_ALL_TRANSPORTS_BY_ID:
        return { ...state, isLoading: false, dataResultTransportsById: null };
      case GET_ALL_TRANSPORTS_BY_ID_FAILED:
        return {
          ...state,
          actionType: GET_ALL_TRANSPORTS_BY_ID_FAILED,
          dataResultTransportsById: action.data,
          message: action.message,
          status: action.status,
          responseCode: action.responseCode,
        };
      case GET_ALL_TRANSPORTS_BY_ID_SUCCESS:
        return {
          ...state,
          actionType: GET_ALL_TRANSPORTS_BY_ID_SUCCESS,
          dataResultTransportsById: action.data,
          message: action.message,
          status: action.status,
          responseCode: action.responseCode,
        };
  
      default:
        return state;
    }
  };
  