import {
    GET_ALL_EMPLOYEE,
    DELETE_BY_ID_EMPLOYEE,
    INSRT_NEW_EMPLOYEE,
    UPDATE_EMPLOYEE
  } from "../utils/commonType";
  
  export const requestGetAllEmployee = (data) => {
    return {
      type: GET_ALL_EMPLOYEE,
      data,
    };
  };
  export const requestDeleteEmployee = (data, token) => {
    return {
      type: DELETE_BY_ID_EMPLOYEE,
      data,
      token,
    };
  };
  
  export const requestInsertEmployee = (data, token) => {
    return {
      type: INSRT_NEW_EMPLOYEE,
      data,
      token,
    };
  };
  export const requestUpdateEmployee = (data, token) => {
    return {
      type: UPDATE_EMPLOYEE,
      data,
      token,
    };
  };
  