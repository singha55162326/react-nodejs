import {
  GET_ALL_CAR,
  GET_ALL_CAR_SUCCESS,
  GET_ALL_CAR_FAILED,
  DELETE_BY_ID_CAR,
  DELETE_BY_ID_CAR_FAILED,
  DELETE_BY_ID_CAR_SUCCESS,
  INSRT_NEW_CAR,
  INSRT_NEW_CAR_FAILED,
  INSRT_NEW_CAR_SUCCESS,
  UPDATE_CAR,
  UPDATE_CAR_FAILED,
  UPDATE_CAR_SUCCESS,
} from "../utils/commonType";

const initialState = {
  error: false,
  success: false,
  actionType: null,
  isLoading: false,
  dataResultCar: null,
  dataResultCarDelete: null,
  dataResultCarNew: null,
  dataResultCarUpdate: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CAR:
      return { ...state, isLoading: false, dataResultCar: null };
    case GET_ALL_CAR_FAILED:
      return {
        ...state,
        actionType: GET_ALL_CAR_FAILED,
        dataResultCar: action.data,
        message: action.message,
        status: action.status,
        responseCode: action.responseCode,
      };
    case GET_ALL_CAR_SUCCESS:
      return {
        ...state,
        actionType: GET_ALL_CAR_SUCCESS,
        dataResultCar: action.data,
        message: action.message,
        status: action.status,
        responseCode: action.responseCode,
      };
    case DELETE_BY_ID_CAR:
      return { ...state, isLoading: false, dataResultCarDelete: null };
    case DELETE_BY_ID_CAR_FAILED:
      return {
        ...state,
        actionType: DELETE_BY_ID_CAR_FAILED,
        dataResultCarDelete: action.data,
        message: action.message,
        status: action.status,
        responseCode: action.responseCode,
      };
    case DELETE_BY_ID_CAR_SUCCESS:
      return {
        ...state,
        actionType: DELETE_BY_ID_CAR_SUCCESS,
        dataResultCarDelete: action.data,
        message: action.message,
        status: action.status,
        responseCode: action.responseCode,
      };

    case INSRT_NEW_CAR:
      return { ...state, isLoading: false, dataResultCarNew: null };
    case INSRT_NEW_CAR_FAILED:
      return {
        ...state,
        actionType: INSRT_NEW_CAR_FAILED,
        dataResultCarNew: action.data,
        message: action.message,
        status: action.status,
        responseCode: action.responseCode,
      };
    case INSRT_NEW_CAR_SUCCESS:
      return {
        ...state,
        actionType: INSRT_NEW_CAR_SUCCESS,
        dataResultCarNew: action.data,
        message: action.message,
        status: action.status,
        responseCode: action.responseCode,
      };

    case UPDATE_CAR:
      return { ...state, isLoading: false, dataResultCarUpdate: null };
    case UPDATE_CAR_FAILED:
      return {
        ...state,
        actionType: UPDATE_CAR_FAILED,
        dataResultCarUpdate: action.data,
        message: action.message,
        status: action.status,
        responseCode: action.responseCode,
      };
    case UPDATE_CAR_SUCCESS:
      return {
        ...state,
        actionType: UPDATE_CAR_SUCCESS,
        dataResultCarUpdate: action.data,
        message: action.message,
        status: action.status,
        responseCode: action.responseCode,
      };

    default:
      return state;
  }
};
