import {
    GET_ALL_EMPLOYEE,
    GET_ALL_EMPLOYEE_SUCCESS,
    GET_ALL_EMPLOYEE_FAILED,

    DELETE_BY_ID_EMPLOYEE,
    DELETE_BY_ID_EMPLOYEE_FAILED,
    DELETE_BY_ID_EMPLOYEE_SUCCESS,

    INSRT_NEW_EMPLOYEE,
    INSRT_NEW_EMPLOYEE_FAILED,
    INSRT_NEW_EMPLOYEE_SUCCESS,

    UPDATE_EMPLOYEE,
    UPDATE_EMPLOYEE_FAILED,
    UPDATE_EMPLOYEE_SUCCESS,
  } from "../utils/commonType";
  
  const initialState = {
    error: false,
    success: false,
    actionType: null,
    isLoading: false,
    dataResultEmployee: null,
    dataResultEmployeeDelete: null,
    dataResultEmployeeNew: null,
    dataResultEmployeeUpdate: null,
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case GET_ALL_EMPLOYEE:
        return { ...state, isLoading: false, dataResultEmployee: null };
      case GET_ALL_EMPLOYEE_FAILED:
        return {
          ...state,
          actionType: GET_ALL_EMPLOYEE_FAILED,
          dataResultEmployee: action.data,
          message: action.message,
          status: action.status,
          responseCode: action.responseCode,
        };
      case GET_ALL_EMPLOYEE_SUCCESS:
        return {
          ...state,
          actionType: GET_ALL_EMPLOYEE_SUCCESS,
          dataResultEmployee: action.data,
          message: action.message,
          status: action.status,
          responseCode: action.responseCode,
        };
      case DELETE_BY_ID_EMPLOYEE:
        return { ...state, isLoading: false, dataResultEmployeeDelete: null };
      case DELETE_BY_ID_EMPLOYEE_FAILED:
        return {
          ...state,
          actionType: DELETE_BY_ID_EMPLOYEE_FAILED,
          dataResultEmployeeDelete: action.data,
          message: action.message,
          status: action.status,
          responseCode: action.responseCode,
        };
      case DELETE_BY_ID_EMPLOYEE_SUCCESS:
        return {
          ...state,
          actionType: DELETE_BY_ID_EMPLOYEE_SUCCESS,
          dataResultEmployeeDelete: action.data,
          message: action.message,
          status: action.status,
          responseCode: action.responseCode,
        };
  
      case INSRT_NEW_EMPLOYEE:
        return { ...state, isLoading: false, dataResultEmployeeNew: null };
      case INSRT_NEW_EMPLOYEE_FAILED:
        return {
          ...state,
          actionType: INSRT_NEW_EMPLOYEE_FAILED,
          dataResultEmployeeNew: action.data,
          message: action.message,
          status: action.status,
          responseCode: action.responseCode,
        };
      case INSRT_NEW_EMPLOYEE_SUCCESS:
        return {
          ...state,
          actionType: INSRT_NEW_EMPLOYEE_SUCCESS,
          dataResultEmployeeNew: action.data,
          message: action.message,
          status: action.status,
          responseCode: action.responseCode,
        };
  
      case UPDATE_EMPLOYEE:
        return { ...state, isLoading: false, dataResultEmployeeUpdate: null };
      case UPDATE_EMPLOYEE_FAILED:
        return {
          ...state,
          actionType: UPDATE_EMPLOYEE_FAILED,
          dataResultEmployeeUpdate: action.data,
          message: action.message,
          status: action.status,
          responseCode: action.responseCode,
        };
      case UPDATE_EMPLOYEE_SUCCESS:
        return {
          ...state,
          actionType: UPDATE_EMPLOYEE_SUCCESS,
          dataResultEmployeeUpdate: action.data,
          message: action.message,
          status: action.status,
          responseCode: action.responseCode,
        };
  
      default:
        return state;
    }
  };
  