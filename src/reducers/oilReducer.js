import {
    GET_ALL_OIL,
    GET_ALL_OIL_SUCCESS,
    GET_ALL_OIL_FAILED,
    DELETE_BY_ID_OIL,
    DELETE_BY_ID_OIL_FAILED,
    DELETE_BY_ID_OIL_SUCCESS,
    INSRT_NEW_OIL,
    INSRT_NEW_OIL_FAILED,
    INSRT_NEW_OIL_SUCCESS,
    UPDATE_OIL,
    UPDATE_OIL_FAILED,
    UPDATE_OIL_SUCCESS,
    GET_ALL_OIL_BY_ID_SUPPLIER,
    GET_ALL_OIL_BY_ID_SUPPLIER_SUCCESS,
    GET_ALL_OIL_BY_ID_SUPPLIER_FAILED
  } from "../utils/commonType";
  
  const initialState = {
    error: false,
    success: false,
    actionType: null,
    isLoading: false,
    dataResultOil: null,
    dataResultOilDelete: null,
    dataResultOilNew: null,
    dataResultOilUpdate: null,
    dataResultOilByIdSupplier: null,
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case GET_ALL_OIL:
        return { ...state, isLoading: false, dataResultOil: null };
      case GET_ALL_OIL_FAILED:
        return {
          ...state,
          actionType: GET_ALL_OIL_FAILED,
          dataResultOil: action.data,
          message: action.message,
          status: action.status,
          responseCode: action.responseCode,
        };
      case GET_ALL_OIL_SUCCESS:
        return {
          ...state,
          actionType: GET_ALL_OIL_SUCCESS,
          dataResultOil: action.data,
          message: action.message,
          status: action.status,
          responseCode: action.responseCode,
        };
      case DELETE_BY_ID_OIL:
        return { ...state, isLoading: false, dataResultOilDelete: null };
      case DELETE_BY_ID_OIL_FAILED:
        return {
          ...state,
          actionType: DELETE_BY_ID_OIL_FAILED,
          dataResultOilDelete: action.data,
          message: action.message,
          status: action.status,
          responseCode: action.responseCode,
        };
      case DELETE_BY_ID_OIL_SUCCESS:
        return {
          ...state,
          actionType: DELETE_BY_ID_OIL_SUCCESS,
          dataResultOilDelete: action.data,
          message: action.message,
          status: action.status,
          responseCode: action.responseCode,
        };
  
      case INSRT_NEW_OIL:
        return { ...state, isLoading: false, dataResultOilNew: null };
      case INSRT_NEW_OIL_FAILED:
        return {
          ...state,
          actionType: INSRT_NEW_OIL_FAILED,
          dataResultOilNew: action.data,
          message: action.message,
          status: action.status,
          responseCode: action.responseCode,
        };
      case INSRT_NEW_OIL_SUCCESS:
        return {
          ...state,
          actionType: INSRT_NEW_OIL_SUCCESS,
          dataResultOilNew: action.data,
          message: action.message,
          status: action.status,
          responseCode: action.responseCode,
        };
  
      case UPDATE_OIL:
        return { ...state, isLoading: false, dataResultOilUpdate: null };
      case UPDATE_OIL_FAILED:
        return {
          ...state,
          actionType: UPDATE_OIL_FAILED,
          dataResultOilUpdate: action.data,
          message: action.message,
          status: action.status,
          responseCode: action.responseCode,
        };
      case UPDATE_OIL_SUCCESS:
        return {
          ...state,
          actionType: UPDATE_OIL_SUCCESS,
          dataResultOilUpdate: action.data,
          message: action.message,
          status: action.status,
          responseCode: action.responseCode,
        };

        case GET_ALL_OIL_BY_ID_SUPPLIER:
        return { ...state, isLoading: false, dataResultOilByIdSupplier: null };
      case GET_ALL_OIL_BY_ID_SUPPLIER_FAILED:
        return {
          ...state,
          actionType: GET_ALL_OIL_BY_ID_SUPPLIER_FAILED,
          dataResultOilByIdSupplier: action.data,
          message: action.message,
          status: action.status,
          responseCode: action.responseCode,
        };
      case GET_ALL_OIL_BY_ID_SUPPLIER_SUCCESS:
        return {
          ...state,
          actionType: GET_ALL_OIL_BY_ID_SUPPLIER_SUCCESS,
          dataResultOilByIdSupplier: action.data,
          message: action.message,
          status: action.status,
          responseCode: action.responseCode,
        };
  
      default:
        return state;
    }
  };
  