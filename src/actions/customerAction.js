import {
    GET_ALL_CUSTOMERS,
    DELETE_BY_ID_CUSTOMERS,
    INSRT_NEW_CUSTOMERS,
    UPDATE_CUSTOMERS
  } from "../utils/commonType";
  
  export const requestGetAllCustomers = (data) => {
    return {
      type: GET_ALL_CUSTOMERS,
      data,
    };
  };
  export const requestDeleteCustomers = (data, token) => {
    return {
      type: DELETE_BY_ID_CUSTOMERS,
      data,
      token,
    };
  };
  
  export const requestInsertCustomers = (data, token) => {
    return {
      type: INSRT_NEW_CUSTOMERS,
      data,
      token,
    };
  };
  export const requestUpdateCustomers = (data, token) => {
    return {
      type: UPDATE_CUSTOMERS,
      data,
      token,
    };
  };
  