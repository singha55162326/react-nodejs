import {
    GET_ALL_CUSTOMERS,
    GET_ALL_CUSTOMERS_SUCCESS,
    GET_ALL_CUSTOMERS_FAILED,
    DELETE_BY_ID_CUSTOMERS,
    DELETE_BY_ID_CUSTOMERS_FAILED,
    DELETE_BY_ID_CUSTOMERS_SUCCESS,
    INSRT_NEW_CUSTOMERS,
    INSRT_NEW_CUSTOMERS_FAILED,
    INSRT_NEW_CUSTOMERS_SUCCESS,
    UPDATE_CUSTOMERS,
    UPDATE_CUSTOMERS_FAILED,
    UPDATE_CUSTOMERS_SUCCESS,
  } from "../utils/commonType";
  
  const initialState = {
    error: false,
    success: false,
    actionType: null,
    isLoading: false,
    dataResultCustomers: null,
    dataResultCustomersDelete: null,
    dataResultCustomersNew: null,
    dataResultCustomersUpdate: null,
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case GET_ALL_CUSTOMERS:
        return { ...state, isLoading: false, dataResultCustomers: null };
      case GET_ALL_CUSTOMERS_FAILED:
        return {
          ...state,
          actionType: GET_ALL_CUSTOMERS_FAILED,
          dataResultCustomers: action.data,
          message: action.message,
          status: action.status,
          responseCode: action.responseCode,
        };
      case GET_ALL_CUSTOMERS_SUCCESS:
        return {
          ...state,
          actionType: GET_ALL_CUSTOMERS_SUCCESS,
          dataResultCustomers: action.data,
          message: action.message,
          status: action.status,
          responseCode: action.responseCode,
        };
      case DELETE_BY_ID_CUSTOMERS:
        return { ...state, isLoading: false, dataResultCustomersDelete: null };
      case DELETE_BY_ID_CUSTOMERS_FAILED:
        return {
          ...state,
          actionType: DELETE_BY_ID_CUSTOMERS_FAILED,
          dataResultCustomersDelete: action.data,
          message: action.message,
          status: action.status,
          responseCode: action.responseCode,
        };
      case DELETE_BY_ID_CUSTOMERS_SUCCESS:
        return {
          ...state,
          actionType: DELETE_BY_ID_CUSTOMERS_SUCCESS,
          dataResultCustomersDelete: action.data,
          message: action.message,
          status: action.status,
          responseCode: action.responseCode,
        };
  
      case INSRT_NEW_CUSTOMERS:
        return { ...state, isLoading: false, dataResultCustomersNew: null };
      case INSRT_NEW_CUSTOMERS_FAILED:
        return {
          ...state,
          actionType: INSRT_NEW_CUSTOMERS_FAILED,
          dataResultCustomersNew: action.data,
          message: action.message,
          status: action.status,
          responseCode: action.responseCode,
        };
      case INSRT_NEW_CUSTOMERS_SUCCESS:
        return {
          ...state,
          actionType: INSRT_NEW_CUSTOMERS_SUCCESS,
          dataResultCustomersNew: action.data,
          message: action.message,
          status: action.status,
          responseCode: action.responseCode,
        };
  
      case UPDATE_CUSTOMERS:
        return { ...state, isLoading: false, dataResultCustomersUpdate: null };
      case UPDATE_CUSTOMERS_FAILED:
        return {
          ...state,
          actionType: UPDATE_CUSTOMERS_FAILED,
          dataResultCustomersUpdate: action.data,
          message: action.message,
          status: action.status,
          responseCode: action.responseCode,
        };
      case UPDATE_CUSTOMERS_SUCCESS:
        return {
          ...state,
          actionType: UPDATE_CUSTOMERS_SUCCESS,
          dataResultCustomersUpdate: action.data,
          message: action.message,
          status: action.status,
          responseCode: action.responseCode,
        };
  
      default:
        return state;
    }
  };
  