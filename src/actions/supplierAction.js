import {
    GET_ALL_SUPPLIER,
    DELETE_BY_ID_SUPPLIER,
    INSRT_NEW_SUPPLIER,
    UPDATE_SUPPLIER
  } from "../utils/commonType";
  
  export const requestGetAllSupplier = (data) => {
    return {
      type: GET_ALL_SUPPLIER,
      data,
    };
  };
  export const requestDeleteSupplier = (data, token) => {
    return {
      type: DELETE_BY_ID_SUPPLIER,
      data,
      token,
    };
  };
  
  export const requestInsertSupplier = (data, token) => {
    return {
      type: INSRT_NEW_SUPPLIER,
      data,
      token,
    };
  };
  export const requestUpdateSupplier = (data, token) => {
    return {
      type: UPDATE_SUPPLIER,
      data,
      token,
    };
  };
  