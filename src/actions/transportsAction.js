import {
    GET_ALL_TRANSPORTS,
    DELETE_BY_ID_TRANSPORTS,
    INSRT_NEW_TRANSPORTS,
    UPDATE_TRANSPORTS,
    GET_ALL_TRANSPORTS_BY_ID
  } from "../utils/commonType";
  
  export const requestGetAllTransports = (data) => {
    return {
      type: GET_ALL_TRANSPORTS,
      data,
    };
  };
  export const requestDeleteTransports = (data, token) => {
    return {
      type: DELETE_BY_ID_TRANSPORTS,
      data,
      token,
    };
  };
  
  export const requestInsertTransports = (data, token) => {
    return {
      type: INSRT_NEW_TRANSPORTS,
      data,
      token,
    };
  };
  export const requestUpdateTransports = (data, token) => {
    return {
      type: UPDATE_TRANSPORTS,
      data,
      token,
    };
  };

  export const requestGetByIdTransports = (data, token) => {
    return {
      type: GET_ALL_TRANSPORTS_BY_ID,
      data,
      token,
    };
  };
  