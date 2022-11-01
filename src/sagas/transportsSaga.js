import { takeEvery, put } from "redux-saga/effects";
import {
  GET_ALL_TRANSPORTS,
  GET_ALL_TRANSPORTS_FAILED,
  GET_ALL_TRANSPORTS_SUCCESS,

  DELETE_BY_ID_TRANSPORTS,
  DELETE_BY_ID_TRANSPORTS_FAILED,
  DELETE_BY_ID_TRANSPORTS_SUCCESS,

  INSRT_NEW_TRANSPORTS,
  INSRT_NEW_TRANSPORTS_FAILED,
  INSRT_NEW_TRANSPORTS_SUCCESS,

  UPDATE_TRANSPORTS,
  UPDATE_TRANSPORTS_FAILED,
  UPDATE_TRANSPORTS_SUCCESS,

  GET_ALL_TRANSPORTS_BY_ID,
  GET_ALL_TRANSPORTS_BY_ID_FAILED,
  GET_ALL_TRANSPORTS_BY_ID_SUCCESS
  
} from "../utils/commonType";
import { apiResultGetAllTransports, apiResultdataTransportsDelete, apiResultdataTransportsNew, apiResultdataTransportsUpdate, apiResultdataTransportsById } from "../api/apiConfig";

export function* wachResultGetAllTransports() {
  yield takeEvery(GET_ALL_TRANSPORTS, callResultGetAllTransports);
}
function* callResultGetAllTransports(action) {
  try {
    const result = yield apiResultGetAllTransports(action.data);
    if (result.status === 200) {
      if (result.data.responseCode === "00000") {
        yield put({
          type: GET_ALL_TRANSPORTS_SUCCESS,
          status: result.data.status,
          data: result.data.transports,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      } else {
        yield put({
          type: GET_ALL_TRANSPORTS_FAILED,
          status: result.data.status,
          data: result.data.transports,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      }
    } else if (result.status === 500) {
      yield put({
        type: GET_ALL_TRANSPORTS_FAILED,
        status: false,
        data: null,
        message: result.data.message,
        responseCode: result.data.responseCode,
      });
    } else {
      yield put({
        type: GET_ALL_TRANSPORTS_FAILED,
        status: result.data.status,
        data: result.data.transports,
        message: result.data.message,
        responseCode: result.data.responseCode,
      });
    }
  } catch (error) {
    yield put({ type: GET_ALL_TRANSPORTS_FAILED, data: null });
  }
}

export function* wachResultdataTransportsDelete() {
  yield takeEvery(DELETE_BY_ID_TRANSPORTS, callResultdataTransportsDelete);
}
function* callResultdataTransportsDelete(action) {
  try {
    const result = yield apiResultdataTransportsDelete(action.data, action.token);
    console.log("result:", result);
    console.log("status:", result.status);
    console.log("data.responseCode:", result.data.responseCode);
    if (result.status === 200) {
      if (result.data.responseCode === "00000") {
        yield put({
          type: DELETE_BY_ID_TRANSPORTS_SUCCESS,
          status: result.data.status,
          data: result.data,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      } else {
        yield put({
          type: DELETE_BY_ID_TRANSPORTS_FAILED,
          status: result.data.status,
          data: result.data,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      }
    } else {
      yield put({
        type: DELETE_BY_ID_TRANSPORTS_FAILED,
        status: result.data.status,
        data: result.data,
        message: result.data.message,
        responseCode: result.data.responseCode,
      });
    }
  } catch (error) {
    yield put({ type: DELETE_BY_ID_TRANSPORTS_FAILED, data: null });
  }
}


export function* wachResultdataTransportsNew() {
    yield takeEvery(INSRT_NEW_TRANSPORTS, callResultdataTransportsNew);
  }
  function* callResultdataTransportsNew(action) {
    try {
      const result = yield apiResultdataTransportsNew(action.data, action.token );
      console.log("result:", result);
      console.log("status:", result.status);
      console.log("data.responseCode:", result.data.responseCode);
      if (result.status === 200) {
        if (result.data.responseCode === "00000") {
          yield put({
            type: INSRT_NEW_TRANSPORTS_SUCCESS,
            status: result.data.status,
            data: result.data,
            message: result.data.message,
            responseCode: result.data.responseCode,
          });
        } else {
          yield put({
            type: INSRT_NEW_TRANSPORTS_FAILED,
            status: result.data.status,
            data: result.data,
            message: result.data.message,
            responseCode: result.data.responseCode,
          });
        }
      } else {
        yield put({
          type: INSRT_NEW_TRANSPORTS_FAILED,
          status: result.data.status,
          data: result.data,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      }
    } catch (error) {
      yield put({ type: INSRT_NEW_TRANSPORTS_FAILED, data: null });
    }
  }


  export function* wachResultdataTransportsUpdate() {
    yield takeEvery(UPDATE_TRANSPORTS, callResultdataTransportsUpdate);
  }
  function* callResultdataTransportsUpdate(action) {
    try {
      const result = yield apiResultdataTransportsUpdate(action.data, action.token );
      console.log("result:", result);
      console.log("status:", result.status);
      console.log("data.responseCode:", result.data.responseCode);
      if (result.status === 200) {
        if (result.data.responseCode === "00000") {
          yield put({
            type: UPDATE_TRANSPORTS_SUCCESS,
            status: result.data.status,
            data: result.data,
            message: result.data.message,
            responseCode: result.data.responseCode,
          });
        } else {
          yield put({
            type: UPDATE_TRANSPORTS_FAILED,
            status: result.data.status,
            data: result.data,
            message: result.data.message,
            responseCode: result.data.responseCode,
          });
        }
      } else {
        yield put({
          type: UPDATE_TRANSPORTS_FAILED,
          status: result.data.status,
          data: result.data,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      }
    } catch (error) {
      yield put({ type: UPDATE_TRANSPORTS_FAILED, data: null });
    }
  }




export function* wachResultdataTransportsById() {
  yield takeEvery(GET_ALL_TRANSPORTS_BY_ID, callResultdataTransportsById);
}
function* callResultdataTransportsById(action) {
  try {
    const result = yield apiResultdataTransportsById(action.data, action.token );
    console.log("result:", result);
    console.log("status:", result.status);
    console.log("data.responseCode:", result.data.responseCode);
    if (result.status === 200) {
      if (result.data.responseCode === "00000") {
        yield put({
          type: GET_ALL_TRANSPORTS_BY_ID_SUCCESS,
          status: result.data.status,
          data: result.data.transports,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      } else {
        yield put({
          type: GET_ALL_TRANSPORTS_BY_ID_FAILED,
          status: result.data.status,
          data: result.data.transports,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      }
    } else {
      yield put({
        type: GET_ALL_TRANSPORTS_BY_ID_FAILED,
        status: result.data.status,
        data: result.data,
        message: result.data.message,
        responseCode: result.data.responseCode,
      });
    }
  } catch (error) {
    yield put({ type: GET_ALL_TRANSPORTS_BY_ID_FAILED, data: null });
  }
}