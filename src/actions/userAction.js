import {
    GET_ALL_USERS,
    DELETE_BY_ID_USERS,
    INSRT_NEW_USERS,
    UPDATE_USERS
  } from "../utils/commonType";
  
  export const requestGetAllUsers = (data) => {
    return {
      type: GET_ALL_USERS,
      data,
    };
  };
  export const requestDeleteUsers = (data, token) => {
    return {
      type: DELETE_BY_ID_USERS,
      data,
      token,
    };
  };
  
  export const requestInsertUsers = (data, token) => {
    return {
      type: INSRT_NEW_USERS,
      data,
      token,
    };
  };
  export const requestUpdateUsers = (data, token) => {
    return {
      type: UPDATE_USERS,
      data,
      token,
    };
  };
  