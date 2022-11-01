import { takeEvery, put } from "redux-saga/effects";
import {
  GET_ALL_CAR,
  GET_ALL_CAR_FAILED,
  GET_ALL_CAR_SUCCESS,

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
import { apiResultGetAllCar, apiResultdataCarDelete, apiResultdataCarNew, apiResultdataCarUpdate } from "../api/apiConfig";

export function* wachResultGetAllCar() {
  yield takeEvery(GET_ALL_CAR, callResultGetAllCar);
}
function* callResultGetAllCar(action) {
  try {
    const result = yield apiResultGetAllCar(action.data);
    if (result.status === 200) {
      if (result.data.responseCode === "00000") {
        yield put({
          type: GET_ALL_CAR_SUCCESS,
          status: result.data.status,
          data: result.data.cars,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      } else {
        yield put({
          type: GET_ALL_CAR_FAILED,
          status: result.data.status,
          data: result.data.listData,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      }
    } else if (result.status === 500) {
      yield put({
        type: GET_ALL_CAR_FAILED,
        status: false,
        data: null,
        message: result.data.message,
        responseCode: result.data.responseCode,
      });
    } else {
      yield put({
        type: GET_ALL_CAR_FAILED,
        status: result.data.status,
        data: result.data.listData,
        message: result.data.message,
        responseCode: result.data.responseCode,
      });
    }
  } catch (error) {
    yield put({ type: GET_ALL_CAR_FAILED, data: null });
  }
}

export function* wachResultdataCarDelete() {
  yield takeEvery(DELETE_BY_ID_CAR, callResultdataCarDelete);
}
function* callResultdataCarDelete(action) {
  try {
    const result = yield apiResultdataCarDelete(action.data, action.token);
    console.log("result:", result);
    console.log("status:", result.status);
    console.log("data.responseCode:", result.data.responseCode);
    if (result.status === 200) {
      if (result.data.responseCode === "00000") {
        yield put({
          type: DELETE_BY_ID_CAR_SUCCESS,
          status: result.data.status,
          data: result.data,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      } else {
        yield put({
          type: DELETE_BY_ID_CAR_FAILED,
          status: result.data.status,
          data: result.data,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      }
    } else {
      yield put({
        type: DELETE_BY_ID_CAR_FAILED,
        status: result.data.status,
        data: result.data,
        message: result.data.message,
        responseCode: result.data.responseCode,
      });
    }
  } catch (error) {
    yield put({ type: DELETE_BY_ID_CAR_FAILED, data: null });
  }
}


export function* wachResultdataCarNew() {
    yield takeEvery(INSRT_NEW_CAR, callResultdataCarNew);
  }
  function* callResultdataCarNew(action) {
    try {
      const result = yield apiResultdataCarNew(action.data, action.token );
      console.log("result:", result);
      console.log("status:", result.status);
      console.log("data.responseCode:", result.data.responseCode);
      if (result.status === 200) {
        if (result.data.responseCode === "00000") {
          yield put({
            type: INSRT_NEW_CAR_SUCCESS,
            status: result.data.status,
            data: result.data,
            message: result.data.message,
            responseCode: result.data.responseCode,
          });
        } else {
          yield put({
            type: INSRT_NEW_CAR_FAILED,
            status: result.data.status,
            data: result.data,
            message: result.data.message,
            responseCode: result.data.responseCode,
          });
        }
      } else {
        yield put({
          type: INSRT_NEW_CAR_FAILED,
          status: result.data.status,
          data: result.data,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      }
    } catch (error) {
      yield put({ type: INSRT_NEW_CAR_FAILED, data: null });
    }
  }


  export function* wachResultdataCarUpdate() {
    yield takeEvery(UPDATE_CAR, callResultdataCarUpdate);
  }
  function* callResultdataCarUpdate(action) {
    try {
      const result = yield apiResultdataCarUpdate(action.data, action.token );
      console.log("result:", result);
      console.log("status:", result.status);
      console.log("data.responseCode:", result.data.responseCode);
      if (result.status === 200) {
        if (result.data.responseCode === "00000") {
          yield put({
            type: UPDATE_CAR_SUCCESS,
            status: result.data.status,
            data: result.data,
            message: result.data.message,
            responseCode: result.data.responseCode,
          });
        } else {
          yield put({
            type: UPDATE_CAR_FAILED,
            status: result.data.status,
            data: result.data,
            message: result.data.message,
            responseCode: result.data.responseCode,
          });
        }
      } else {
        yield put({
          type: UPDATE_CAR_FAILED,
          status: result.data.status,
          data: result.data,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      }
    } catch (error) {
      yield put({ type: UPDATE_CAR_FAILED, data: null });
    }
  }
