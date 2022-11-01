import {
    GET_ALL_OIL,
    DELETE_BY_ID_OIL,
    INSRT_NEW_OIL,
    UPDATE_OIL,
    GET_ALL_OIL_BY_ID_SUPPLIER
  } from "../utils/commonType";
  
  export const requestGetAllOil = (data) => {
    return {
      type: GET_ALL_OIL,
      data,
    };
  };
  export const requestDeleteOil = (data, token) => {
    return {
      type: DELETE_BY_ID_OIL,
      data,
      token,
    };
  };
  
  export const requestInsertOil = (data, token) => {
    return {
      type: INSRT_NEW_OIL,
      data,
      token,
    };
  };
  export const requestUpdateOil = (data, token) => {
    return {
      type: UPDATE_OIL,
      data,
      token,
    };
  };

  export const requestGetAllOilByIdSupplier = (data, token) => {
    return {
      type: GET_ALL_OIL_BY_ID_SUPPLIER,
      data,
      token,
    };
  };
  