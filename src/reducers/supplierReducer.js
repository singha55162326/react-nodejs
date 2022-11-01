import {
    GET_ALL_SUPPLIER,
    GET_ALL_SUPPLIER_SUCCESS,
    GET_ALL_SUPPLIER_FAILED,
    DELETE_BY_ID_SUPPLIER,
    DELETE_BY_ID_SUPPLIER_FAILED,
    DELETE_BY_ID_SUPPLIER_SUCCESS,
    INSRT_NEW_SUPPLIER,
    INSRT_NEW_SUPPLIER_FAILED,
    INSRT_NEW_SUPPLIER_SUCCESS,
    UPDATE_SUPPLIER,
    UPDATE_SUPPLIER_FAILED,
    UPDATE_SUPPLIER_SUCCESS,
  } from "../utils/commonType";
  
  const initialState = {
    error: false,
    success: false,
    actionType: null,
    isLoading: false,
    dataResultSupplier: null,
    dataResultSupplierDelete: null,
    dataResultSupplierNew: null,
    dataResultSupplierUpdate: null,
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case GET_ALL_SUPPLIER:
        return { ...state, isLoading: false, dataResultSupplier: null };
      case GET_ALL_SUPPLIER_FAILED:
        return {
          ...state,
          actionType: GET_ALL_SUPPLIER_FAILED,
          dataResultSupplier: action.data,
          message: action.message,
          status: action.status,
          responseCode: action.responseCode,
        };
      case GET_ALL_SUPPLIER_SUCCESS:
        return {
          ...state,
          actionType: GET_ALL_SUPPLIER_SUCCESS,
          dataResultSupplier: action.data,
          message: action.message,
          status: action.status,
          responseCode: action.responseCode,
        };
      case DELETE_BY_ID_SUPPLIER:
        return { ...state, isLoading: false, dataResultSupplierDelete: null };
      case DELETE_BY_ID_SUPPLIER_FAILED:
        return {
          ...state,
          actionType: DELETE_BY_ID_SUPPLIER_FAILED,
          dataResultSupplierDelete: action.data,
          message: action.message,
          status: action.status,
          responseCode: action.responseCode,
        };
      case DELETE_BY_ID_SUPPLIER_SUCCESS:
        return {
          ...state,
          actionType: DELETE_BY_ID_SUPPLIER_SUCCESS,
          dataResultSupplierDelete: action.data,
          message: action.message,
          status: action.status,
          responseCode: action.responseCode,
        };
  
      case INSRT_NEW_SUPPLIER:
        return { ...state, isLoading: false, dataResultSupplierNew: null };
      case INSRT_NEW_SUPPLIER_FAILED:
        return {
          ...state,
          actionType: INSRT_NEW_SUPPLIER_FAILED,
          dataResultSupplierNew: action.data,
          message: action.message,
          status: action.status,
          responseCode: action.responseCode,
        };
      case INSRT_NEW_SUPPLIER_SUCCESS:
        return {
          ...state,
          actionType: INSRT_NEW_SUPPLIER_SUCCESS,
          dataResultSupplierNew: action.data,
          message: action.message,
          status: action.status,
          responseCode: action.responseCode,
        };
  
      case UPDATE_SUPPLIER:
        return { ...state, isLoading: false, dataResultSupplierUpdate: null };
      case UPDATE_SUPPLIER_FAILED:
        return {
          ...state,
          actionType: UPDATE_SUPPLIER_FAILED,
          dataResultSupplierUpdate: action.data,
          message: action.message,
          status: action.status,
          responseCode: action.responseCode,
        };
      case UPDATE_SUPPLIER_SUCCESS:
        return {
          ...state,
          actionType: UPDATE_SUPPLIER_SUCCESS,
          dataResultSupplierUpdate: action.data,
          message: action.message,
          status: action.status,
          responseCode: action.responseCode,
        };
  
      default:
        return state;
    }
  };
  