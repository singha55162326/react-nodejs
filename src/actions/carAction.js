import {
  GET_ALL_CAR,
  DELETE_BY_ID_CAR,
  INSRT_NEW_CAR,
  UPDATE_CAR
} from "../utils/commonType";

export const requestGetAllCar = (data) => {
  return {
    type: GET_ALL_CAR,
    data,
  };
};
export const requestDeleteCar = (data, token) => {
  return {
    type: DELETE_BY_ID_CAR,
    data,
    token,
  };
};

export const requestInsertCar = (data, token) => {
  return {
    type: INSRT_NEW_CAR,
    data,
    token,
  };
};
export const requestUpdateCar = (data, token) => {
  return {
    type: UPDATE_CAR,
    data,
    token,
  };
};
